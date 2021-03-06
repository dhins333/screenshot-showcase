class Ui{
    constructor(rightArrow,leftArrow,gameName,capturedOn,cover,backGround,bottomText,nextPage,rightMobileNav,leftMobileNav){

        this.gameName = gameName;
        this.rightArrow = rightArrow;
        this.leftArrow = leftArrow;
        this.capturedOn = capturedOn;
        this.cover = cover;
        this.backGround = backGround;
        this.bottomText = bottomText;
        this.nextPage = nextPage;
        this.rightMobileNav = rightMobileNav;
        this.leftMobileNav = leftMobileNav;
        this.state = "landing";
        this.game = "w3";
        this.next = "gow";
        this.prev = "doom";
    }

    changeNext(data){
        this.prev = this.game;
        this.game = data.landingData[this.game].next;
        this.next = data.landingData[this.game].next;
        this.rightArrow.classList.remove(`${this.prev}-arrow`);
        this.rightArrow.classList.add(`${this.game}-arrow`);
        this.leftArrow.classList.remove(`${this.prev}-arrow`);
        this.leftArrow.classList.add(`${this.game}-arrow`);
        this.bottomText.classList.remove(`${this.prev}-bottomText`);
        this.bottomText.classList.add(`${this.game}-bottomText`);
        this.change();
        
    }

    changePrev(data){
        this.next = this.game;
        this.game = data.landingData[this.game].prev;
        this.prev = data.landingData[this.game].prev;
        this.rightArrow.classList.remove(`${this.next}-arrow`);
        this.rightArrow.classList.add(`${this.game}-arrow`);
        this.leftArrow.classList.remove(`${this.next}-arrow`);
        this.leftArrow.classList.add(`${this.game}-arrow`);
        this.bottomText.classList.remove(`${this.next}-bottomText`);
        this.bottomText.classList.add(`${this.game}-bottomText`);
        this.change();
    }

    change(){
        this.gameName.textContent = data.landingData[this.game].name;
        this.capturedOn.textContent = data.landingData[this.game].on;
        this.backGround.className = `${this.game}-background`;
        this.cover.style.backgroundImage = `url(../cover/${this.game}.jpg)`;
        this.nextPage.href = `../${this.game}.html`;
    }
}