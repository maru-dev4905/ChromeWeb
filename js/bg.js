const body = document.querySelector("body");
const view = document.querySelector(".view-wallpaper");
const main = document.querySelector("main");

const IMG_NUMBER = 6;

view.addEventListener("mouseover",function(){
    main.style.backgroundColor = 'rgba(0,0,0,0)';
    main.style.visibility = 'hidden';
});
view.addEventListener("mouseout",function(){
    main.style.backgroundColor = 'rgba(0,0,0,0.25)';
    main.style.visibility = 'visible';
})

function handleImgLoad(){
    console.log("finish")
}

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber); 
}

init();