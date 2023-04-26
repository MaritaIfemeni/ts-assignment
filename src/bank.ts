
class Bank {
  name: string
  branches: Branch[]
  constructor(name: string) {
    this.name = name
    this.branches = []
  }
  addBranch(branch: Branch) {
    if (this.branches.includes(branch)) {
      return false
    } else {
      this.branches.push(branch)
      return true
    }
  }
  addCustomer(branch: Branch, customer: Customer) {
    if (branch.customer.includes(customer)) {
        return false
    } else {
        branch.customer.push(customer)
        return true

    }
  }
}

export default Bank