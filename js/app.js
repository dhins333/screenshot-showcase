const rightArrow = document.querySelector("#rightArrow");
const leftArrow = document.querySelector("#leftArrow");
const gameName = document.querySelector("#gameName");
const capturedOn = document.querySelector("#captured");
const cover = document.querySelector("#cover");
const backGround = document.querySelector("#background")
const bottomText = document.querySelector("#coverBottomText");
const nextPage = document.querySelector("#nextPage");
const rightMobileNav = document.querySelector("#rightMobileNavContainer");
const leftMobileNav = document.querySelector("#leftMobileNavContainer");
const ui = new Ui(rightArrow,leftArrow,gameName,capturedOn,cover,backGround,bottomText,nextPage,rightMobileNav,leftMobileNav);
const data = new Data();

loadEventListeners();

function loadEventListeners(){
    document.addEventListener("DOMContentLoaded",fetchData);
    rightArrow.addEventListener("click",next);
    leftArrow.addEventListener("click",prev);
    rightMobileNav.addEventListener("click",nextMobile);
    leftMobileNav.addEventListener("click",prevMobile);
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

function nextMobile(e){
    e.preventDefault();
    ui.changeNext(data);
}

function prevMobile(e){
    e.preventDefault();
    ui.changePrev(data);
}


