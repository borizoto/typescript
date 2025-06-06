// 2. Bank Account  

class BankAccount {
    private balance: number;

    constructor(b: number) {
        this.balance = b;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (this.balance > amount) {
            this.balance -= amount;
        }
    }

    getBalance(): number {
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
