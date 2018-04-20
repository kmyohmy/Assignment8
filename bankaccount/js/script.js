/*eslint-env browser*/

var btnName = window.document.getElementById("btnName");
var btnDeposit = window.document.getElementById("btnDeposit");
var btnWithdrawal = window.document.getElementById("btnWithdrawal");

var userName = window.document.getElementById("namespan");

var TransType = window.document.getElementById("TransSpan");
var balance = 0;


var bankAccount = function (ownerName) {
    var balance, owner;
    owner = '';

    return {
            withdrawal: function (withdrawalAmount) {
                var WithdrawalAmount = parseInt(window.prompt("Please specify the amount you would like to Withdraw"));
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
                var depositAmount = parseInt(window.prompt("Please specify the amount you would like to deposit"),10);
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

       
btnName.addEventListener('click', function() {
    bankAccount.getOwnerName(500);
});
btnDeposit.addEventListener('click', function() {
    bankAccount.deposit(500);
});
btnWithdrawal.addEventListener('click', function() {
    bankAccount.withdrawal(500);
});