// class Car {
//   constructor(name, engine, wheels, doors) {
//     (this.name = name),
//       (this.engine = engine),
//       (this.wheels = wheels),
//       (this.doors = doors);
//   }
//   sound() {
//     return "Vroom";
//   }
// }

// // Blueprint of object

// const supra = new Car("ferrari", "V8", 2, 4);
// const polo = new Car("polo", "V", 4, 4);
// const sClass = new Car("benz S-Class", "V4", 4, 4);
// const maybach = new Car("maybach", "V4", 2, 4);

// console.log(supra.sound());
// console.log(polo);
// console.log(sClass);
// console.log(maybach);

// console.log(typeof Car);

class Bank {
  static transactionCount = 1;
  static accountCount = 0;
  static interestRate = 1.03;
  static savingAccountInterest = 1.06;
  static currentAccountInterest = 1.03;

  constructor(accNo, name, balance) {
    (this.accNo = accNo), (this.name = name), (this.balance = balance);
    (this.transactions = []), Bank.accountCount++;
  }

  savingsInterestCalculator() {
    const interestAmount = this.balance * Bank.savingAccountInterest;
    console.log(
      `Your Yearly Savings Interest Amount is ${this.currencyFormat(
        interestAmount
      )} 🥳🥳`
    );
  }
  CurrentInterestCalculator() {
    const interestAmount = this.balance * Bank.currentAccountInterest;
    console.log(
      `Your Yearly Savings Interest Amount is ${this.currencyFormat(
        interestAmount
      )} 🥳🥳`
    );
  }

  currencyFormat(amount) {
    const formatter = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    });
    return formatter.format(amount);
  }
  static getAccountCount() {
    return Bank.accountCount;
  }

  displayBalance() {
    return `${this.name} your account balance is : ${this.currencyFormat(
      this.balance
    )}`;
  }
  updateTransactions(type, amount) {
    this.transactions.push(this.transaction(type, amount));
  }
  withDraw(amt) {
    if (amt > this.balance) return `decline`;
    else {
      this.balance = this.balance - amt - 10;
      this.updateTransactions("withdraw", amt);
      return `${this.name} you account got debited ${this.currencyFormat(
        amt
      )} 😭`;
    }
  }
  calculateInterest() {
    const interestAmount = this.balance * Bank.interestRate;
    console.log(
      `Your Yearly Interest Amount is ${this.currencyFormat(
        interestAmount
      )} 🥳🥳`
    );
  }
  depositAmount(amount) {
    this.balance = amount + this.balance;
    const data = `${this.name} , ${this.accNo}, ${this.balance}`;
    this.updateTransactions("deposit", amount);
    return `Your new balance is ${this.currencyFormat(this.balance)}`;
  }
  transaction(type, amount) {
    const tId = Bank.transactionCount++;
    return {
      transactionId: tId,
      name: this.name,
      type: type,
      amount: this.currencyFormat(amount),
      balance: this.currencyFormat(this.balance),
    };
  }
  printTransactions() {
    console.log(this.transactions);
  }
}

const nikhil = new Bank(1299, "Nikhil", 10_000.0);
const guna = new Bank(1305, "Guna", 15_000.0);
const phani = new Bank(1304, "Phani", 8_000.0);
const nithin = new Bank(1197, "Nithin", 20_000.0);
const pavan = new Bank(1298, "pavan", 6_000.0);

// console.log(nikhil);
// console.log(nithin);
// console.log(guna.displayBalance());
console.log(phani.displayBalance());
console.log(phani.withDraw(1000));
console.log(phani.displayBalance());
console.log(phani.depositAmount(1000));

console.log(phani.displayBalance());

phani.printTransactions();

nikhil.printTransactions();

console.log(this.transactions);

console.log(nithin.displayBalance());
console.log(nithin.withDraw(15000));
console.log(nithin.displayBalance());
nithin.printTransactions();

console.log(nithin.withDraw(200));
nithin.printTransactions();

console.log(guna.displayBalance());

console.log(guna.withDraw(2000));
console.log(guna.withDraw(1000));
console.log(guna.withDraw(2000));
console.log(guna.depositAmount(1500));
console.log(guna.displayBalance());

guna.printTransactions();

console.log(guna.displayBalance());

guna.calculateInterest();

console.log(`Total number of accounts: ${Bank.getAccountCount()}`);

guna.savingsInterestCalculator();
guna.CurrentInterestCalculator();
