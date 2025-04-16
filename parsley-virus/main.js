const src1 = './ParsleyPhotos/IMG_2581.jpg';
const src2 = './ParsleyPhotos/IMG_4284.jpg';
const src3 = './ParsleyPhotos/IMG_4285.jpg';
const src4 = './ParsleyPhotos/IMG_4388.jpg';
const src5 = './ParsleyPhotos/IMG_4499.jpg';
const src5b = './ParsleyPhotos/IMG_4537.jpg';
const src6 = './ParsleyPhotos/IMG_5055.jpg';
const src7 = './ParsleyPhotos/IMG_5122.jpg';
const src8 = './ParsleyPhotos/IMG_5150.jpg';
const src9 = './ParsleyPhotos/IMG_5152.jpg';
const src10 = './ParsleyPhotos/IMG_5492.jpg';
const src11 = './ParsleyPhotos/IMG_5693.jpg';
const src12 = './ParsleyPhotos/IMG_5695.jpg';
const src13 = './ParsleyPhotos/IMG_6135.jpg';
const src14 = './ParsleyPhotos/IMG_6287.jpg';
const src15 = './ParsleyPhotos/IMG_6344.jpg';
const src16 = './ParsleyPhotos/IMG_7032.jpg';
const src17 = './ParsleyPhotos/IMG_7183.jpg';
const src18 = './ParsleyPhotos/IMG_7277.jpg';
const src19 = './ParsleyPhotos/IMG_7443.jpg';
const src20 = './ParsleyPhotos/IMG_7603.jpg';
const src21 = './ParsleyPhotos/IMG_8115.png';
const src22 = "./ParsleyPhotos/The Curt'sley.jpg";
const src23 = './ParsleyPhotos/Wth lol parsley.jpg';

const srcsList = [src1, src2, src3, src4, src5, src5b, src6, src7, src8, src9, src10, src11, src12, src13, src14, src15, src16, src17, src18, src19, src20, src21, src22, src23];

const body = document.getElementsByTagName('body')[0];

const colorsArray = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "white", "black"];

function createImage() {
    const img = document.createElement('img');
    img.src = srcsList[Math.floor(Math.random() * srcsList.length)];
    const randomWidth = 75 + (Math.random() * 200);
    img.style.width = `${randomWidth}px`;
    img.style.height = `${randomWidth}px`;
    img.style.left = `${Math.random() * 100}%`;
    img.style.top = `${Math.random() * 100}%`;
    img.style.transform = `rotate(${Math.random() * 360}deg)`;

    body.appendChild(img);
}

function createText() {
    const text = document.createElement('h1');
    const randomSize = 16 + (Math.random() * 48);
    text.innerHTML = "MEOOOOWWWW!!!!!";
    text.style.color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
    text.style.fontSize = `${randomSize}px`;
    text.style.left = `${Math.random() * 100}%`;
    text.style.top = `${Math.random() * 100}%`;
    text.style.transform = `rotate(${Math.random() * 360}deg)`;

    body.appendChild(text);
}

function createShootingStar() {
    const shootingStar = document.createElement('div');
    const randomWidth = 28 + (Math.random() * 16);
    shootingStar.className = "shootingStar";
    shootingStar.style.width = `${randomWidth}px`;
    shootingStar.style.height = `${randomWidth}px`;
    shootingStar.style.left = `${Math.random() * 100}%`;

    body.appendChild(shootingStar);
    setTimeout(() => {shootingStar.remove()}, 10000);
}

function floodImages() {
    setTimeout(() => {
        createImage();
        createText();
        if (Math.random() < 0.2) {
            createShootingStar();
        }
        body.style.background = colorsArray[Math.floor(Math.random() * colorsArray.length)];
        floodImages();
    }, 100);
}

floodImages();
