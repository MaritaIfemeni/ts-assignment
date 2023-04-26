import Customer from "./customer"
import Branch from "./branch"

class Bank {
  name: string;
  branches: Branch[];
  constructor(name: string) {
    this.name = name;
    this.branches = [];
  }
  addBranch(branch: Branch) {
    if (this.branches.includes(branch)) {
      console.log(`Branch called ${branch} already exists`);
      return false;
    } else {
      this.branches.push(branch);
      console.log(`Added branch called ${branch} successfully`);
      return true;
    }
  }
  addCustomer(branch: Branch, customer: Customer) {
    if (branch.customer.includes(customer)) {
      console.log(`${customer} is not a customer of this branch`);
      return false;
    } else {
      branch.customer.push(customer);
      console.log(`Added customer ${customer} to branch ${branch}`);
      return true;
    }
  }
  addCustomerTransaction(branch: Branch, customer: Customer, amount: number) {
    const isCustomerOfBranch = branch.customer.some(
      (c) => c.id === customer.id
    );
    if (isCustomerOfBranch) {
      customer.transactions.push(amount);
      console.log(
        `Added transaction of ${amount} for customer with ID ${customer.id}`
      );
      return true;
    } else {
      console.log(`ID ${customer.id} is not a customer of this branch`);
      return false;
    }
  }
  findBranchByName(name: string): Branch[] | null {
    let matchedBranches: Branch[] = [];
    for (let branch of this.branches) {
      if (branch.name === name) {
        matchedBranches.push(branch);
      }
    }
    if (matchedBranches.length > 0) {
      console.log(`Found these branches: `);
      return matchedBranches;
    } else {
      return null;
    }
  }
  checkBranch(branch: Branch): boolean {
    if (this.branches.includes(branch)) {
      return true;
    } else {
      return false;
    }
  }
  listCustomers(branch: Branch, showTransactions: boolean): boolean {
    if (this.checkBranch(branch)) {
      console.log(`Customer details for branch ${branch.name}`);
      for (let customer of branch.customer) {
        console.log(`Customer: ${customer.name}`);
        if (showTransactions) {
          console.log(`Transactions:`);
          for (let transaction of customer.transactions) {
            console.log(`Amount: ${transaction}`);
          }
        }
      }
      return true;
    } else {
      return false;
    }
  }
}

export default Bank;
