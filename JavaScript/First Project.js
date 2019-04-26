// Problem:

// Change the values of the variables A an B

var A = 10
var B = 20
var C = null

// in order to change the values between variables we need to do as follows:

C=A
A=B
B=C
C=null

console.log('A should be 20, and after the changes is: ' + A)
console.log('B should be 10, and after the changes is: ' + B)
console.log('C should continue to be null, and is : '+ C)