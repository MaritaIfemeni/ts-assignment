import Customer from "./customer";

class Branch {
  private name: string;
  private customers: Customer[];

  constructor(name: string) {
    this.name = name;
    this.customers = [];
  }

  getName(): string {
    return this.name;
  }

  getCustomers(): Customer[] {
    return this.customers;
  }

  addCustomers(customer: Customer): boolean {
    if (this.customers.includes(customer)) {
      return false;
    } else {
      this.customers.push(customer);
      return true;
    }
  }

  addCustomerTransaction(customer: Customer, amount: number): boolean {
    if (this.customers.includes(customer)) {
      customer.getTransactions().push({ amount, date: new Date() });
      return true;
    } else {
      return false;
    }
  }

  findCustomer(id: string): Customer | null {
    for (let customer of this.customers) {
      if (customer.getId() === id) {
        return customer;
      }
    }
    return null;
  }
}
export default Branch;
