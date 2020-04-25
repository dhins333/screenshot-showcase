const rightArrow = document.querySelector("#rightArrow");
const leftArrow = document.querySelector("#leftArrow");
const gameName = document.querySelector("#gameName");
const capturedOn = document.querySelector("#captured");
const cover = document.querySelector("#cover");
const backGround = document.querySelector("#background")
const bottomText = document.querySelector("#coverBottomText");
const ui = new Ui(rightArrow,leftArrow,gameName,capturedOn,cover,backGround,bottomText);
const data = new Data();

loadEventListeners();

function loadEventListeners(){
    document.addEventListener("DOMContentLoaded",fetchData);
    rightArrow.addEventListener("click",next);
    leftArrow.addEventListener("click",prev);
}

function fetchData(){
    data.fetchFromLanding();
}

function next(e){
    e.preventDefault();
    ui.changeNext(data);
}

function prev(e){
    e.preventDefault();
    ui.changePrev(data);
}

