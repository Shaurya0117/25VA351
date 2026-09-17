//2. Bank Account Management System
//Create a class BankAccount with accountNo, holderName, and balance. Use a constructor to initialize the account. Provide instance methods deposit(amount), withdraw(amount), and displayBalance(). Withdrawal should not be allowed when the requested amount is greater than the available balance. Create a static method bankInfo() that displays the bank name and general banking information. Create two account objects and perform different transactions on them.
//Concepts Covered: Constructor, Objects, Instance Methods, Static Method, Object State

class BankAccount {
    constructor(accountNo, holderName, balance) {
        this.accountNo = accountNo;
        this.holderName = holderName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance = this.balance + amount;
        console.log("Amount deposited successfully.");
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance = this.balance - amount;
            console.log("Amount withdrawn successfully.");
        } else {
            console.log("Insufficient balance.");
        }
    }

    displayBalance() {
        console.log("Account No:", this.accountNo);
        console.log("Holder Name:", this.holderName);
        console.log("Balance:", this.balance);
    }

    static bankInfo() {
        console.log("Bank Name: ABC Bank");
        console.log("General Information: Safe and secure banking services.");
    }
}

BankAccount.bankInfo();

let account1 = new BankAccount(101, "Rahul", 5000);
let account2 = new BankAccount(102, "Aman", 8000);

console.log("\n--- Account 1 ---");
account1.deposit(2000);
account1.withdraw(1000);
account1.displayBalance();

console.log("\n--- Account 2 ---");
account2.deposit(3000);
account2.withdraw(12000);
account2.displayBalance();