// Given a input string S, reverse the given string by appending each 
// character of the string with '-'.
// Input Size : |S| <= 100000
// Sample Testcase :
// INPUT
// codekata
// OUTPUT
// a-t-a-k-e-d-o-c


let str="codekata";
let arr=str.split('').reverse().join("-");
console.log(arr);