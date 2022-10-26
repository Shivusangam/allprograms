// Given a string S, print 'yes' if it is a palindrome or 'no' if it is not a palindrome.
// Sample Testcase :
// INPUT
// lappal
// OUTPUT
// yes

let str="lappal";
let arr=str.split('');
let strnew=[];
for (let i=arr.length; i>=0; i--){
    strnew.push(arr[i])
}
if(str===strnew.join('')){
    console.log("yes");
}
else{
    console.log("no") 
        
    }

