import Customer from "./customer";
import Branch from "./branch";

class Bank {
  private name: string;
  private branches: Branch[];
  constructor(name: string) {
    this.name = name;
    this.branches = [];
  }
  addBranch(branch: Branch) {
    if (this.branches.includes(branch)) {
      console.log(`Branch called ${branch.getName()} already exists`);
      return false;
    } else {
      this.branches.push(branch);
      console.log(`Added branch called ${branch.getName()} successfully`);
      return true;
    }
  }
  addCustomer(branch: Branch, customer: Customer) {
    if (branch.getCustomers().includes(customer)) {
      console.log(`${customer.getName()} is already a customer of this branch`);
      return true;
    } else {
      branch.getCustomers().push(customer);
      console.log(
        `Added customer ${customer.getName()} to branch ${branch.getName()}`
      );
      return true;
    }
  }
  addCustomerTransaction(branch: Branch, customerId: string, amount: number) {
    const isCustomerOfBranch = branch
      .getCustomers()
      .some((c) => c.getId() === customerId);
    if (isCustomerOfBranch) {
      const customer = branch
        .getCustomers()
        .find((c) => c.getId() === customerId);
      customer?.getTransactions().push({ amount, date: new Date() });
      console.log(
        `Added transaction of ${amount} for customer with ID ${customer?.getId()}`
      );
      return true;
    } else {
      console.log(`ID ${customerId} is not a customer of this branch`);
      return false;
    }
  }
  findBranchByName(name: string): Branch[] | null {
    let matchedBranches: Branch[] = [];
    for (let branch of this.branches) {
      if (branch.getName() === name) {
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
      console.log("---------------------------------");
      console.log(`Customer details for branch ${branch.getName()}`);
      for (let customer of branch.getCustomers()) {
        console.log("----------------");
        console.log(`Customer: ${customer.getName()}`);
        if (showTransactions) {
          console.log(`Transactions:`);
          for (let transaction of customer.getTransactions()) {
            console.log(`Amount: ${transaction.amount}`);
          }
        }
        console.log("----------------");
      }
      console.log("---------------------------------");
      return true;
    } else {
      return false;
    }
  }
}

export default Bank;
