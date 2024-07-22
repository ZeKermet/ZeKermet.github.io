import * as firebase from "./firebase.js";
import * as priceFormatter from "./priceFormatter.js";

// ---------------- Page Elements ----------------
const productsContainer = document.getElementById('products-container');
const searchBar = document.getElementById('search');

// If the searchbar is focused on in the site
let searchbarFocused = false;


// ---------------- Event Listeners ----------------
if (productsContainer && searchBar) {

    // Initiates search to pull all products from the database
    search('');

    searchBar.addEventListener('focus', () => {
        searchbarFocused = true;
    });
    searchBar.addEventListener('focusout', () => {
        searchbarFocused = false;
    });
    
    window.addEventListener('keypress', (e) => {
        if (e.key === "Enter" && searchbarFocused) {
            let searchInput = searchBar.value.toLowerCase();
            search(searchInput);
        }
    });



    function search(keywords) {
        productsContainer.innerHTML = "";

        firebase.getProductsList(keywords.toLowerCase())
        .then((productsList) => {
            if (productsList.length !== 0) {
                productsList.forEach(product => {
                    addProductElement(product);
                });
            }
        });
    }
    
    function addProductElement(product) {
    
        firebase.getImageURL(product)
        .then(imgURL => {
            productsContainer.innerHTML += `
                <div class="product">
                    <img class="product-image" src="${imgURL}">

                    <div class="product-content">

                        <h4 class="product-name">${product.productName}</h4>

                        <div class="product-sale-info">
                            <h5 class="product-price">$<span class="product-price-number">${priceFormatter.formatPrice(product.USDPrice)}</span></h5>
                            <p class="product-quantity">Qty: <span class="product-quantity-number">${product.quantity}</span></p>
                        </div>

                        <button class="product-addtocart"><i class="fa-solid fa-cart-shopping"></i>Add to cart</button>

                    </div>

                </div>
            `
        });
    }

}
