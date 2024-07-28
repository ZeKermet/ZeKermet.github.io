// ---------------------------- FIREBASE SETUP ----------------------------
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";

// --- FIRESTORE DATABASE FUNCTIONS
import { 
    getFirestore, 
    collection, 
    addDoc, 
    getDocs, 
    getDoc, 
    doc, 
    setDoc,
    deleteDoc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// --- FIREBASE STORAGE FUNCTIONS
import { 
    getStorage,
    ref,
    getDownloadURL,
    uploadBytes
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-storage.js";


const firebaseConfig = {
    apiKey: "AIzaSyAxRpNnSsbKrlrUFgr8sPl4eNXO9IsEDx4",
    authDomain: "products-and-cart-test.firebaseapp.com",
    projectId: "products-and-cart-test",
    storageBucket: "products-and-cart-test.appspot.com",
    messagingSenderId: "392222346356",
    appId: "1:392222346356:web:bd88b00c0c9316bfd65521"
};

// --- INITIALIZE FIREBASE + SERVICES 
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage();



// ---------------------------- AFTER SETUP ----------------------------

// --- Database References
const productsCollectionRefName = "products-collection";
const productsCollection = collection(db, productsCollectionRefName);

// --- Storage References
const imageStorageDir = "productImages/";
const productImgFolder = ref(storage, imageStorageDir);


// ------------------ Functions ------------------
export async function addProduct(name, dollarPrice, centsPrice, quantity, imgFile) {
    try {
        const newProductDoc = {
            productName: name,
            quantity: quantity,
            USDPrice: parseFloat(`${dollarPrice}.${centsPrice}`),
            imgName: imgFile.name
        }   

        // Adds product to database
        await addDoc(productsCollection, newProductDoc);

        let tempImageRef = ref(storage, `${imageStorageDir}${imgFile.name}`);
        
        // Adds product image to storage
        await uploadBytes(tempImageRef, imgFile)
        .then(() => {
            alert("Success");
        });
        
    } catch(e) {
        alert(`Error: ${e}`);
    }
    
}

export async function getProductsList(keywords) {
    try {
        const productsArray = [];

        await getDocs(productsCollection)
        .then((productListQuery) => {

            if (keywords !== '') {
                productListQuery.forEach(productDoc => {
                    if (productDoc.data().productName.toLowerCase().includes(keywords)) {
                        const product = productDoc.data();
                        productsArray.push(product);
                    }
                });
            } else {
                productListQuery.forEach(productDoc => {
                    const product = productDoc.data();  
                    productsArray.push(product);
                });
            }

        });

        return productsArray;

    } catch (e) {
        alert(e);
    }
    
}

export async function getImageURL(product) {
    try {
        let url = "";

        await getDownloadURL(ref(storage, `${imageStorageDir}${product.imgName}`))
        .then((retrievedURL) => {
            url = retrievedURL;
        });
        
        return url;

    } catch (e) {
        alert(e);
    }
    
}

export async function purchaseCart(cartList) {
    try {
        let returnString = "";

        for (const product of cartList) {
            await buyItem(product.name, product.purchaseQuantity) // Returns Confirmation String
            .then((tempString) => {
                if (tempString.includes('Not Found')) {
                    returnString += tempString;
                }
            });
            
        }

        return returnString;

    } catch(e) {
        alert(e);
    }

}

async function buyItem(productName, purchaseQuantity) {
    try {
        let product = null;
        let id = null;

        const productListQuery = await getDocs(productsCollection);
        
        productListQuery.forEach(productDoc => {
            if (productDoc.data().productName === productName) {
                product = productDoc.data();
                id = productDoc.id;
            }
        });
        

        if (product === null) {
            return `Product Not Found: ${productName}\n`;
        } else {
            const newQuantity = product.quantity - purchaseQuantity;

            if (newQuantity <= 0) {
                await deleteDoc(doc(db, productsCollectionRefName, id));
            } else {
                await updateDoc(doc(db, productsCollectionRefName, id), {quantity: newQuantity});
            }

            return "Success";
        }

    } catch (e) {
        alert(e);
    }


}