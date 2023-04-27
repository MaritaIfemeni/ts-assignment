import { Transaction } from "./transaction";
import { v4 as uuidv4 } from "uuid";

class Customer {
  private name: string;
  private id: string;
  private transactions: Transaction[];
  constructor(name: string) {
    this.name = name;
    this.id = uuidv4();
    this.transactions = [];
  }
  getName(): string {
    return this.name;
  }
  getId(): string {
    return this.id;
  }
  getTransactions(): Transaction[] {
    return this.transactions;
  }
  getBalance(): number {
    let balance: number = 0;
    for (let transaction of this.transactions) {
      balance += transaction.amount;
    }
    return balance;
  }
  addTransactions(amount: number): boolean {
    if (this.getBalance() + amount < 0) {
      return false;
    } else {
      this.transactions.push({ amount, date: new Date() });
      console.log(this.transactions);
      return true;
    }
  }
}

export default Customer;
