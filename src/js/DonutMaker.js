export {DonutMaker};

class DonutMaker {

    constructor() {
        this.clicksNumber = 0;
        this.autoClickerCost = 10;
        this.autoClickersNumber = 0;
        this.multiplierCost = 10;
        this.multipliersNumber = 0;
    }

    makeDonut() {
        this.clicksNumber += 1;
    }

    updateDonutsNumberAfterPurchaseAutoClicker() {
        this.clicksNumber = this.clicksNumber - this.autoClickerCost;
    }

    updateDonutsNumberAfterPurchaseMultiplier() {
        this.clicksNumber = this.clicksNumber - this.multiplierCost;
    }

    updateNumberOfPurchasedAutoClickers() {
        this.autoClickersNumber += 1;
    }

    updateNumberOfPurchasedMultipliers() {
        this.multipliersNumber += 1;
    }

    updateAutoClickerCost() {
        this.autoClickerCost = this.autoClickerCost + this.autoClickerCost * 0.1;
    }

    updateMultiplierCost() {
        this.multiplierCost = this.multiplierCost + this.multiplierCost * 0.1;
    }

    getClicksNumber() {
        return this.clicksNumber;
    }

    getAutoClickerCost() {
        return this.autoClickerCost;
    }

    getMultiplierCost() {
        return this.multiplierCost;
    }

    getAutoClickersNumber() {
        return this.autoClickersNumber;
    }

    getMultipliersNumber() {
        return this.multipliersNumber;
    }
}