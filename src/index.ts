import Bank from "./bank"
import Customer from "./customer"
import Branch from "./branch"

const arizonaBank = new Bank("Arizona")
const westBranch = new Branch("West Branch")
const sunBranch = new Branch("Sun Branch")
const customer1 = new Customer("John")
const customer2 = new Customer("Anna")
const customer3 = new Customer("John")

arizonaBank.addBranch(westBranch)
arizonaBank.addBranch(sunBranch)
arizonaBank.addBranch(westBranch) 

arizonaBank.findBranchByName("bank")
arizonaBank.findBranchByName("sun")

arizonaBank.addCustomer(westBranch, customer1)
arizonaBank.addCustomer(westBranch, customer3)
arizonaBank.addCustomer(sunBranch, customer1)
arizonaBank.addCustomer(sunBranch, customer2)

// I Wasn't able to make these lines to work, I had to call the getId() method to get the id of the customer, there was a problem making the callBack function to work I guess. 
// arizonaBank.addCustomerTransaction(westBranch, customer1.getId, 3000)    
// arizonaBank.addCustomerTransaction(westBranch, customer1.getId, 2000)
// arizonaBank.addCustomerTransaction(westBranch, customer2.getId, 3000)

arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000)
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 2000)
arizonaBank.addCustomerTransaction(westBranch, customer2.getId(), 3000)

customer1.addTransactions(-1000)
console.log(customer1.getBalance())
console.log(arizonaBank.listCustomers(westBranch, true))
console.log(arizonaBank.listCustomers(sunBranch,true))