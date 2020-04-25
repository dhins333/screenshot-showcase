class Data{
    constructor(){
        this.landingData;
    }

    async fetchFromLanding(){
        const landingResp = await fetch("../data/landing.json");
        const landingData = await landingResp.json();
        this.landingData = landingData;
    }


}