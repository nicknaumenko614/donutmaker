import {DonutMaker} from "./DonutMaker.js";

const donutMaker = new DonutMaker();

const donutMakerClickerButton = document.getElementById("makeDonutButton");
const madeDonutsNumberElement = document.getElementById("madeDonuts");
const purchaseAutoClickerButton = document.getElementById("purchaseAutoClickerButton");
const purchasedAutoClickersElement = document.getElementById("purchasedAutoClickers");
const autoClickerPriceElement = document.getElementById("autoClickerPrice");
const purchaseMultiplierButton = document.getElementById("purchaseMultiplierButton");
const purchasedMultipliersElement = document.getElementById("purchasedMultipliers");
const multiplierPriceElement = document.getElementById("multiplierPrice");
const resetAllButton = document.getElementById("resetAllButton");

initClickerButton();
initPurchaseAutoClickerButton();
initPurchaseMultiplierButton();
initResetButton()
run();

function initClickerButton() {
    madeDonutsNumberElement.innerText = donutMaker.getClicksNumber();

    donutMakerClickerButton.addEventListener('click', () => {
        donutMaker.makeDonut();
        madeDonutsNumberElement.innerText = donutMaker.getClicksNumber();

        if (donutMaker.getClicksNumber() >= donutMaker.getAutoClickerCost()) {
            enableBtn("purchaseAutoClickerButton")
        }

        if (donutMaker.getClicksNumber() < donutMaker.getAutoClickerCost()) {
            disableBtn("purchaseAutoClickerButton")
        }

        if (donutMaker.getClicksNumber() >= donutMaker.getMultiplierCost()) {
            enableBtn("purchaseMultiplierButton")
        }

        if (donutMaker.getClicksNumber() < donutMaker.getMultiplierCost()) {
            disableBtn("purchaseMultiplierButton")
        }
    });
}

function initPurchaseAutoClickerButton() {
    autoClickerPriceElement.innerHTML = donutMaker.getAutoClickerCost();

    purchaseAutoClickerButton.addEventListener('click', () => {
        donutMaker.updateDonutsNumberAfterPurchaseAutoClicker();
        madeDonutsNumberElement.innerText = donutMaker.getClicksNumber();

        donutMaker.updateNumberOfPurchasedAutoClickers();
        purchasedAutoClickersElement.innerHTML = donutMaker.getAutoClickersNumber();

        donutMaker.updateAutoClickerCost();
        autoClickerPriceElement.innerHTML = donutMaker.getAutoClickerCost();

        if (donutMaker.getClicksNumber() < donutMaker.getAutoClickerCost()) {
            disableBtn("purchaseAutoClickerButton")
        }

        if (donutMaker.getClicksNumber() < donutMaker.getMultiplierCost()) {
            disableBtn("purchaseMultiplierButton")
        }
    });
}

function initPurchaseMultiplierButton() {
    multiplierPriceElement.innerHTML = donutMaker.getMultiplierCost();

    purchaseMultiplierButton.addEventListener('click', () => {
        donutMaker.updateDonutsNumberAfterPurchaseMultiplier();
        madeDonutsNumberElement.innerText = donutMaker.getClicksNumber();

        donutMaker.updateNumberOfPurchasedMultipliers();
        purchasedMultipliersElement.innerHTML = donutMaker.getMultipliersNumber();

        donutMaker.updateMultiplierCost();
        multiplierPriceElement.innerHTML = donutMaker.getMultiplierCost();

        if (donutMaker.getClicksNumber() < donutMaker.getMultiplierCost()) {
            disableBtn("purchaseMultiplierButton")
        }

        if (donutMaker.getClicksNumber() < donutMaker.getAutoClickerCost()) {
            disableBtn("purchaseAutoClickerButton")
        }
    })
}

function initResetButton() {
    resetAllButton.addEventListener('click', () => {
        donutMaker.resetAll();

        madeDonutsNumberElement.innerText = donutMaker.getClicksNumber();
        multiplierPriceElement.innerHTML = donutMaker.getMultiplierCost();
        purchasedMultipliersElement.innerHTML = donutMaker.getMultipliersNumber();
        autoClickerPriceElement.innerHTML = donutMaker.getAutoClickerCost();
        purchasedAutoClickersElement.innerHTML = donutMaker.getAutoClickersNumber();
    })

}

function enableBtn(buttonElementId) {
    document.getElementById(buttonElementId).disabled = false;
}

function disableBtn(buttonElementId) {
    document.getElementById(buttonElementId).disabled = true;
}

function run() {
    window.setInterval(() => {
        donutMaker.startAutoClicking();
        madeDonutsNumberElement.innerText = donutMaker.getClicksNumber();

        if (donutMaker.getClicksNumber() >= donutMaker.getAutoClickerCost()) {
            enableBtn("purchaseAutoClickerButton")
        }

        if (donutMaker.getClicksNumber() < donutMaker.getAutoClickerCost()) {
            disableBtn("purchaseAutoClickerButton")
        }

        if (donutMaker.getClicksNumber() >= donutMaker.getMultiplierCost()) {
            enableBtn("purchaseMultiplierButton")
        }

        if (donutMaker.getClicksNumber() < donutMaker.getMultiplierCost()) {
            disableBtn("purchaseMultiplierButton")
        }
    }, 1000);
}


