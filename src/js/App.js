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

        checkAutoClickerCapacity();

        checkMultiplierCapacity();
    });
}

function initPurchaseAutoClickerButton() {
    autoClickerPriceElement.innerHTML = donutMaker.getAutoClickerCost();

    purchaseAutoClickerButton.addEventListener('click', () => {
        donutMaker.updateDonutsNumberAfterPurchaseAutoClicker();
        donutMaker.updateNumberOfPurchasedAutoClickers();
        donutMaker.updateAutoClickerCost();
        updateAutoClickerFields();
        checkAutoClickerCapacity();
        checkMultiplierCapacity();
    });
}

function initPurchaseMultiplierButton() {
    multiplierPriceElement.innerHTML = donutMaker.getMultiplierCost();

    purchaseMultiplierButton.addEventListener('click', () => {
        donutMaker.updateDonutsNumberAfterPurchaseMultiplier();
        donutMaker.updateNumberOfPurchasedMultipliers();
        donutMaker.updateMultiplierCost();
        updateMultiplierFields();
        checkMultiplierCapacity();
        checkAutoClickerCapacity();
    })
}

function initResetButton() {
    resetAllButton.addEventListener('click', () => {
        donutMaker.resetAll();
        updateMultiplierFields();
        updateAutoClickerFields();
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

        checkAutoClickerCapacity();
        checkMultiplierCapacity();

    }, 1000);
}

function checkAutoClickerCapacity() {
    if (donutMaker.getClicksNumber() >= donutMaker.getAutoClickerCost()) {
        enableBtn("purchaseAutoClickerButton");
    }

    else {
        disableBtn("purchaseAutoClickerButton");
    }
}

function checkMultiplierCapacity() {
    if (donutMaker.getClicksNumber() >= donutMaker.getMultiplierCost()) {
        enableBtn("purchaseMultiplierButton");
    }

    if (donutMaker.getClicksNumber() < donutMaker.getMultiplierCost()) {
        disableBtn("purchaseMultiplierButton");
    }
}

function updateMultiplierFields() {
    madeDonutsNumberElement.innerText = donutMaker.getClicksNumber();
    purchasedMultipliersElement.innerHTML = donutMaker.getMultipliersNumber();
    multiplierPriceElement.innerHTML = donutMaker.getMultiplierCost();
}

function updateAutoClickerFields() {
    madeDonutsNumberElement.innerText = donutMaker.getClicksNumber();
    purchasedAutoClickersElement.innerHTML = donutMaker.getAutoClickersNumber();
    autoClickerPriceElement.innerHTML = donutMaker.getAutoClickerCost();
}
