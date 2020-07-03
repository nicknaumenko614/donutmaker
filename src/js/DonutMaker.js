export {DonutMaker};

class DonutMaker {

    constructor() {
        this.clicksNumber = 0;
        this.autoClickerCost = 10;
        this.autoClickersNumber = 0;
        this.multiplierCost = 10;
        this.multiplierNumber = 0;
    }

    makeDonut() {
        this.clicksNumber += 1;
    }

    updateDonutsNumberAfterPurchaseAutoClicker() {
        this.clicksNumber = this.clicksNumber - this.autoClickerCost;
    }

    updateNumberOfPurchasedAutoClickers() {
        this.autoClickersNumber += 1;
    }

    updateAutoClickerCost() {
        this.autoClickerCost = this.autoClickerCost + this.autoClickerCost * 0.1;
    }

    getClicksNumber() {
        return this.clicksNumber;
    }

    getAutoClickerCost() {
        return this.autoClickerCost;
    }

    getAutoClickersNumber() {
        return this.autoClickersNumber;
    }
}