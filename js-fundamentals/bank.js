class savingsAccount {
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
class currentAccount extends savingsAccount {}
