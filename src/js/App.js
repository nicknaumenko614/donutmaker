import {DonutMaker} from "./DonutMaker.js";

const donutMaker = new DonutMaker();

const donutMakerClickerButton = document.getElementById("makeDonutButton");
const madeDonutsNumber = document.getElementById("madeDonuts");

initClickerButton();


function initClickerButton() {
    madeDonutsNumber.innerText = donutMaker.getClicksNumber();

    donutMakerClickerButton.addEventListener('click', () => {
        donutMaker.makeDonut();
        madeDonutsNumber.innerText = donutMaker.getClicksNumber();
    });
}



