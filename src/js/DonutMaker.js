export {DonutMaker};

class DonutMaker {

    constructor() {
        this.clicksNumber = 0;
        this.autoClickerCost = 10;
        this.autoClickerClicksNumber = 0;
        this.multiplierCost = 10;
        this.multiplierNumber = 0;
    }

    makeDonut() {
        this.clicksNumber += 1;
    }

    getClicksNumber() {
        return this.clicksNumber;
    }
}