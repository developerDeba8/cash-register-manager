var buttonCheck = document.querySelector("#btn-check");
var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var message = document.querySelector("#error-message");

var noteDenomination = [2000, 500, 100, 20, 10, 5, 1];

var noteDenominationCount = document.querySelectorAll(".notes-denomination-count");

function showMessage(msg) {
    message.style.display = "block";
    message.style.color = "white";
    message.style.margin = "1rem auto";
    message.innerText = msg;
}


function calculateMinNumberOfCashChangeToBeReturned(cashChangeToBeReturned) {
    for (let i = 0; i < noteDenomination.length; i++) {
        var numOfNote = Math.trunc(cashChangeToBeReturned / noteDenomination[i]);
        cashChangeToBeReturned %= noteDenomination[i];
        noteDenominationCount[i].innerText = numOfNote;
    }
}

function checkBtnClickHandler() {
    message.style.display = "none";
    
    if (Number(billAmount.value) >= 0) {
        if (Number(cashGiven.value) > Number(billAmount.value)) {
            var cashChangeToBeReturned = Number(cashGiven.value) - Number(billAmount.value);
            calculateMinNumberOfCashChangeToBeReturned(cashChangeToBeReturned);
        } else {
            showMessage("Cash amount should be greater or equal to the bill amount");
        }
    } else{
        showMessage("Bill amount should be positive");
    }
}

buttonCheck.addEventListener("click", checkBtnClickHandler);