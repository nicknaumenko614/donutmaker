const makeDonutButton = document.querySelector(".make-donut");
const purchaseAutoClickerButton = document.querySelector(".auto-click")
const purchaseDonutMultiplierButton = document.querySelector(".mulitiply-donut")
const displayNumberOfDonuts = document.querySelector(".number-of-donuts");
let numberOfDonuts = 0;
let autoClickerPrice = 10;
let numberOfPurchasedAutoClickers = 0;

makeDonutButton.addEventListener('click', () =>{
makeDonut();
displayNumberOfDonuts.innerHTML = numberOfDonuts;
})

function makeDonut () {
numberOfDonuts+=1
}

purchaseAutoClickerButton.addEventListener('click', () =>{

})



 
function disableBtn(buttonName) {
    document.getElementById(buttonName).disabled = true;
}

function enableBtn(buttonName) {
    document.getElementById(buttonName).disabled = false;
}
