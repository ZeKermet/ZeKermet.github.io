import * as firebase from "./firebase.js";
import * as priceFormatter from "./priceFormatter.js";

// ---------------- Page Elements ----------------
const cartSection = document.getElementById('cart-items');
const cartItemsList = document.getElementById('cart-items-list');
const totalCartPriceNumber = document.getElementById('cart-total-cost');
const purchaseCartBtn = document.getElementById('purchase-cart-items');

const productListContainer = document.getElementById('products-container');

const openCartIcon = document.getElementById('cart-button-icon');
const openCartBtn = document.getElementById('cart-button');
const closeCartBtn = document.getElementById('close-cart-items-btn');


// Changes whether the cart window is opened or not
let cartIsOpened = false;

// ---------------- Event Listeners ----------------
if (cartSection && openCartBtn && closeCartBtn) {

    openCartBtn.addEventListener('click', () => {
        if (!cartIsOpened) {
            cartIsOpened = true;

            if (!cartSection.classList.contains('opened')) {
                cartSection.classList.add('opened');
            }

            if (openCartIcon.classList.contains('new-notif')) {
                openCartIcon.classList.remove('new-notif');
            }
        }

    });

    closeCartBtn.addEventListener('click', () => {
        if (cartIsOpened) {            
            if (cartSection.classList.contains('opened')) {
                cartSection.classList.remove('opened');
            }
            cartIsOpened = false;
        }
    });
    
}

if (productListContainer && openCartBtn) {

    productListContainer.addEventListener('click', (e) => {
        if (e.target.className === "product-addtocart") {
            const productElement = e.target.parentElement.parentElement;

            const productImageURL = productElement.getElementsByClassName('product-image')[0].getAttribute('src');
            const productName = productElement.getElementsByClassName('product-name')[0].innerHTML;
            const productPrice =  parseFloat(productElement.getElementsByClassName('product-price-number')[0].innerHTML);

            // Adds Notification to the cart icon
            if (!openCartIcon.classList.contains('new-notif') && !cartIsOpened) {
                openCartIcon.classList.add('new-notif');
            }

            cartItemsList.innerHTML += createProductToCartElement(productImageURL, productName, productPrice);
            
            const productAddToCartBtn = productElement.getElementsByClassName('product-addtocart')[0];

            productAddToCartBtn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>Added to cart`;
            productAddToCartBtn.classList.add('added-to-cart');


            refreshCartItemElements();
            updateTotalCartPrice();
            
        }
    });


    purchaseCartBtn.addEventListener('click', async () => {

        if (cartItemsList.getElementsByClassName('cart-item').length === 0) {
            alert("Cart Is Empty");

        } else {
            const cartList = getCartList();

            await firebase.purchaseCart(cartList)
            .then((confirmationString) => {
                if (confirmationString === "") {
                    alert("Success");
                } else {
                    alert(confirmationString);
                }
    
                window.location.reload();
            });
            
        }

    });

}


// ---------------- Functions ----------------

function refreshCartItemElements() {
    for (const cartItemElement of cartItemsList.getElementsByClassName('cart-item')) {
        
        // ---------------- Cart Item's Child Elements + Its Respective Product Element ----------------
        const productElement = findProductElementFromCartItem(cartItemElement);
        const productElementAddToCartBtn = productElement.getElementsByClassName('product-addtocart')[0];
        
        const cartItemQuantityElement = cartItemElement.getElementsByClassName('cart-item-quantity')[0];
        const cartItemPriceElement = cartItemElement.getElementsByClassName('cart-item-total-price')[0];

        const productQuantity = parseInt(productElement.getElementsByClassName('product-quantity-number')[0].innerHTML);
        const productPrice = parseFloat(productElement.getElementsByClassName('product-price-number')[0].innerHTML);

        const moreQuantityBtn = cartItemElement.getElementsByClassName('more-quantity-btn')[0];
        
        // If there is one of said product remaining, the "increase quantity" button will not be ative
        if (productQuantity === 1) {
            moreQuantityBtn.style.background = "var(--neutral-4)";
            moreQuantityBtn.style.cursor = "default";
        }
        
        // ---------------- Cart Item Event Listeners ----------------
        cartItemElement.addEventListener('click', (e) => {
            let quantity = parseInt(cartItemQuantityElement.innerHTML);

            if (e.target.classList.contains("less-quantity-btn")) {

                if (quantity === 1) {
                    cartItemElement.remove();
                    
                    productElementAddToCartBtn.classList.remove('added-to-cart');
                    productElementAddToCartBtn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>Add to cart`;

                } else {
                    quantity--;
                    cartItemQuantityElement.innerHTML = quantity;
                    cartItemPriceElement.innerHTML = priceFormatter.formatPrice(productPrice * quantity);

                    if (moreQuantityBtn.style.background === "var(--neutral-4)") {
                        moreQuantityBtn.style.background = "white";
                        moreQuantityBtn.style.cursor = "pointer";
                    }
                }

            }

            if (e.target.classList.contains("more-quantity-btn")) {
                if (quantity < productQuantity) {
                    quantity++;
                    cartItemQuantityElement.innerHTML = quantity;
                    cartItemPriceElement.innerHTML = priceFormatter.formatPrice(productPrice * quantity);

                    if (quantity === productQuantity) {
                        e.target.style.background = "var(--neutral-4)";
                        e.target.style.cursor = "default";
                    }
                }
                
            }
            

            updateTotalCartPrice();
        });
    }
}


function findProductElementFromCartItem(cartItemElement) {
    let productElement;

    // Searches for the respective product element in the product list
    for (const product of productListContainer.getElementsByClassName('product')) {
        const productNameElement = product.getElementsByClassName('product-name')[0];
        const cartItemNameElement = cartItemElement.getElementsByClassName('cart-item-name')[0];
        
        if (productNameElement.innerHTML === cartItemNameElement.innerHTML) {
            productElement = product;
            break;
        }
    }

    return productElement;
}


function updateTotalCartPrice() {
    let totalPrice = 0;

    if (cartItemsList.getElementsByClassName('cart-item').length !== 0) {
        for (const cartItemElement of cartItemsList.getElementsByClassName('cart-item')) {
            totalPrice += parseFloat(cartItemElement.getElementsByClassName('cart-item-total-price')[0].innerHTML);
        }
    }

    totalCartPriceNumber.innerHTML = priceFormatter.formatPrice(totalPrice);

}

function getCartList() {
    const cartList = [];

    for (const cartItemElement of cartItemsList.getElementsByClassName('cart-item')) {

        let productElement = findProductElementFromCartItem(cartItemElement);

        const productName = productElement.getElementsByClassName('product-name')[0].innerHTML;
        const purchaseQuantity = parseInt(cartItemsList.getElementsByClassName('cart-item-quantity')[0].innerHTML);

        const product = {
            name: productName,
            purchaseQuantity,
        }

        cartList.push(product);
    }

    return cartList;

}



function createProductToCartElement(imageURL, productName, productPrice) {
    return `
        <div class="cart-item">
            <div class="cart-item-left">
                <img class="cart-item-image" src="${imageURL}">
                <h5 class="cart-item-name">${productName}</h5>
            </div>
            
            <div class="cart-item-right">
                <div class="cart-item-quantity-container">
                    <i class="fa-solid fa-minus less-quantity-btn"></i>
                    <h5 class="cart-item-quantity">1</h5>
                    <i class="fa-solid fa-plus more-quantity-btn"></i>
                </div>

                <h5 class="cart-item-price">$<span class="cart-item-total-price">${priceFormatter.formatPrice(productPrice)}</span></h5>
            </div>
            
        </div>
    `;
}

