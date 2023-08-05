var balance = 0.00;
var newBalance = 0.00;

var counter = 0;
var income = 0.00;
var outcome = 0.00;

function loadBalance(){
  balance = document.getElementById("f_balance").value;
  parseFloat(balance);
  newBalance = document.getElementById("f_balance").innerHTML = newBalance;
}

function addToBalance(){
  income = document.getElementById("incomeFundsContainer_numberfield").value;
  balance += income;
  newBalance = document.getElementById("f_balance").innerHTML = balance;
  income = 0;
}

function subtractOfBalance(){
  outcome = document.getElementById("expencesContainer_numberfield").value;
  balance -= outcome;
  newBalance = document.getElementById("f_balance").innerHTML = balance;
  
}