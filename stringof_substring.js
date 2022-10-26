// Given 2 strings.check if the second string is a substring of the first string.Print 
// 'yes' if there exists a valid substring otherwise print 'no'.
// Input Size : 1 <= N <= 100000
// Sample Testcase :
// INPUT
// codekata code
// OUTPUT
// yes

let str="sundar sun";
let arr=str.split(' ');
let str1=arr[0];
let str2=arr[1];
if (str1.includes(str2)){
    console.log("yes")
}
else{ 
    console.log("no")
}
