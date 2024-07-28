import * as firebase from "./firebase.js";
import * as priceFormatter from "./priceFormatter.js";

// ---------------- Page Elements ----------------
const addProductPopup = document.getElementById('add-product-popup');

const openAddProductPopupBtn = document.getElementById('add-product');
const closeAddProductPopupBtn = document.getElementById('close-add-product-popup');

const productNameEntry = document.getElementById('add-product-name');
const productPriceDollarEntry = document.getElementById('add-product-dollar-price');
const productPriceCentsEntry = document.getElementById('add-product-cents-price');
const productQuantityEntry = document.getElementById('add-product-quantity');
const productImageEntry = document.getElementById('add-product-img');

const productImageEntryDisplay = document.getElementById('add-product-img-display');

const submitAddedProductBtn = document.getElementById('submit-added-product');


// ---------------- Event Listeners ----------------
if (openAddProductPopupBtn && addProductPopup && closeAddProductPopupBtn) {

    addProductPopup.style.visibility = "hidden";
    addProductPopup.style.opacity = "0";

    openAddProductPopupBtn.addEventListener('click', () => {
        if (addProductPopup.style.visibility === "hidden") {
            addProductPopup.style.visibility = "visible";
            addProductPopup.style.opacity = "1";
        }
    });

    closeAddProductPopupBtn.addEventListener('click', () => {
        if (addProductPopup.style.visibility === "visible") {
            addProductPopup.style.visibility = "hidden";
            addProductPopup.style.opacity = "0";
        }
    });


    productImageEntry.addEventListener('change', (e) => {
        const imageFile = e.target.files[0];

        productImageEntryDisplay.setAttribute('src', URL.createObjectURL(imageFile));
    });


    submitAddedProductBtn.addEventListener('click', async () => {
        const addProductEntries = [productNameEntry, productPriceCentsEntry, productPriceDollarEntry, productPriceCentsEntry, productQuantityEntry, Array.from(productImageEntry.files)];

        if (!allEntriesAreFilled(addProductEntries)) {
            alert("Enter all fields");

        } else {
            let nameIsTaken = false;

            const queryProductsList = await firebase.getProductsList('');

            queryProductsList.forEach(queryProduct => {
                if (productNameEntry.value === queryProduct.productName) {
                    nameIsTaken = true;
                }
            });

            if (String(productPriceCentsEntry.value).length !== 2) {
                alert("Cents must be two digits");

            } else if (nameIsTaken) {
                alert("Product name is already taken");
                nameIsTaken = false;

            } else {
                await firebase.addProduct(productNameEntry.value, productPriceDollarEntry.value, productPriceCentsEntry.value, parseInt(productQuantityEntry.value), productImageEntry.files[0])
                .then(() => {window.location.reload()});
            }
            
        }
    });

}



// ---------------- Functions ----------------

function allEntriesAreFilled(entriesList) {
    let allAreFilled = true;

    for (const entry of entriesList) {
        if ((Array.isArray(entry) && entry.length === 0) || entry.value === "") {
            allAreFilled = false;
        }
    }

    return allAreFilled;
}



