// Object model

class bankAccount {
// Name some of characteristics of a bank account
    // agency
    // accountNumber
    // balance

    // I need to define attributes
    constructor() {
    this.agency = 1075
    this.accountNumber = 8564831
    this.balance = 50
}

deposit (depositValue) {
    this.balance += depositValue
}

cashOut (cashOutValue) {
    this.balance-= cashOutValue

}
checkBalance () {
    return this.balance
}

}

let x = new bankAccount()

console.log( x.checkBalance())
x.cashOut(10)
x.deposit(35)
console.log(x.checkBalance())