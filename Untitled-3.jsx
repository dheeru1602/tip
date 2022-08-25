let bill = document.getElementById("billAmount");
let per = document.getElementById("percentageTip");
let tip = document.getElementById("tipAmount");
let total = document.getElementById("totalAmount");
let error = document.getElementById("errorMessage");
let errorMessage = "Please Enter a Valid Input.";

function calculateTip() {
    let input = bill.value;
    let cent = per.value;
    if (input == "" || cent == "") {
        error.textContent = errorMessage;
    } else {
        error.textContent = "";
        let billAmount = parseInt(input);
        let percentage = parseInt(cent);
        tip.value = (percentage * billAmount) / 100;
        total.value = parseInt(billAmount) + parseFloat(tip.value);
    }
}