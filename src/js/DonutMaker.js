export {DonutMaker};

class DonutMaker {

    constructor() {
        this.resetAll()
    }

    makeDonut() {
        this.clicksNumber += Math.round(1 * this.calculateMultiplier());
    }

    calculateMultiplier() {
        return Math.pow(1.2, this.multipliersNumber);
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
        this.autoClickerCost = Math.round(this.autoClickerCost + this.autoClickerCost * 0.1);
    }

    updateMultiplierCost() {
        this.multiplierCost = Math.round(this.multiplierCost + this.multiplierCost * 0.1);
    }

    startAutoClicking() {
        for (let i = 0; i < this.autoClickersNumber; i++) {
            this.makeDonut();
        }
    }

    resetAll() {
        this.clicksNumber = 0;
        this.autoClickerCost = 100;
        this.autoClickersNumber = 0;
        this.multiplierCost = 100;
        this.multipliersNumber = 0;
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