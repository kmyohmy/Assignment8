/*eslint-env browser*/
   
var userName = window.document.getElementById("namespan");
    
var TransType = window.document.getElementById("TransSpan");

var bankAccount = function (ownerName, balance) {
    var balance, owner;
    balance = 0;
    owner = ownerName;

    return {
            withdrawal: function (WithdrawalAmount) {
                // var WithdrawalAmount = wit
                if (WithdrawalAmount !== isNaN && WithdrawalAmount !== null && Math.sign(WithdrawalAmount) !== -1) {
                    if (balance > WithdrawalAmount) {
                    balance -= WithdrawalAmount;
                    TransType.innerHTML = "Withdrew: " + WithdrawalAmount + "\nCurrent Balance: " + balance;
                    } else {
                        window.alert("You overdrew more than your account balance!");
                    }
                
                } else {
                    window.alert("That is an invalid character you entered ");
                }
            },
            deposit: function (depositAmount) {
                // var depositAmount = 
                if (isNaN(depositAmount) === false && depositAmount !== null && Math.sign(depositAmount) === 1) {
                balance += depositAmount;
                TransType.innerHTML = "Deposited: "  + depositAmount + "\nCurrent Balance: " + balance;
                } else {
                    window.alert("That is an invalid character you entered");
                }
            },
            getBalance: function () {
                window.console.log(balance);
                
            },
            getOwnerName: function () {
                owner = window.prompt("Please enter your name");
                
                userName.innerHTML = "Logged in: " + owner;
                
                return owner;
            }
        }
            
}

window.onload = function () {

var btnName = window.document.getElementById("btnName");
var btnDeposit = window.document.getElementById("btnDeposit");
var btnWithdrawal = window.document.getElementById("btnWithdrawal");
 
       
btnName.addEventListener('click', function() {
    var b = new bankAccount();
    b.getOwnerName();
});
btnDeposit.addEventListener('click', function() {
    var b = new bankAccount();
    b.deposit(parseInt(window.prompt("Please specify the amount you would like to deposit"),10));
});
btnWithdrawal.addEventListener('click', function() {
    var b = new bankAccount();
    b.withdrawal(parseInt(window.prompt("Please specify the amount you would like to Withdraw")));
});

}