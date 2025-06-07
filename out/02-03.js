"use strict";
// 2. Bank Account  
class BankAccount {
    balance;
    constructor(b) {
        this.balance = b;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (this.balance > amount) {
            this.balance -= amount;
        }
    }
    getBalance() {
        return this.balance;
    }
}
// const account = new BankAccount(100);
// account.deposit(50);
// account.withdraw(30);
// console.log(account.getBalance());
const account = new BankAccount(20);
account.withdraw(30);
console.log(account.getBalance());
//# sourceMappingURL=02-03.js.map