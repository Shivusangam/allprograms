// Given a string S, print the reverse of the string.
// Input Size : |s| <= 100000 (ie do it in O(n) or O(log n) time complexity)
// Sample Testcase :
// INPUT
// codekata
// OUTPUT
// atakedoc

let str="codekata"
let arr=str.split('')
let newarr=arr.reverse().join('')
console.log(newarr)