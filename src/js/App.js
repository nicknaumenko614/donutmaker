import {DonutMaker} from "./DonutMaker.js";

const donutMaker = new DonutMaker();

const donutMakerClickerButton = document.getElementById("makeDonutButton");
const madeDonutsNumberElement = document.getElementById("madeDonuts");
const purchaseAutoClickerButton = document.getElementById("purchaseAutoClickerButton");
const purchasedAutoClickersElement = document.getElementById("purchasedAutoClickers");
const autoClickerPriceElement = document.getElementById("autoClickerPrice");

initClickerButton();
initPurchaseAutoClickerButton();


function initClickerButton() {
    autoClickerPriceElement.innerHTML = donutMaker.getAutoClickerCost();
    madeDonutsNumberElement.innerText = donutMaker.getClicksNumber();

    donutMakerClickerButton.addEventListener('click', () => {
        donutMaker.makeDonut();
        madeDonutsNumberElement.innerText = donutMaker.getClicksNumber();

        if (donutMaker.getClicksNumber() >= donutMaker.getAutoClickerCost()) {
            enableBtn("purchaseAutoClickerButton")
        }
    });
}

function initPurchaseAutoClickerButton() {
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
    });
}

function enableBtn(buttonElementId) {
    document.getElementById(buttonElementId).disabled = false;
}

function disableBtn(buttonElementId) {
    document.getElementById(buttonElementId).disabled = true;
}




