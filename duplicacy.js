// Given 2 strings,check whether they have any common characters.If found print
//  'yes' else print 'no'.
// Input Size : |s| <= 100000(O(n))
// Sample Testcase :
// INPUT
// guvi guvigeeks
// OUTPUT
// yes

// given inpiut
let str="guvi guvigeeks"
// we have convert string to array with the help of split method
let arr=str.split(" ");
// create seperate array
let newstr1=arr[0]
let newstr2=arr[1]
// apply includes method in if condition and check with 1 to 2 and 2 to 1, if true then yes, else no
if(newstr1.includes(newstr2) || newstr2.includes(newstr1)){
    console.log("yes")
}
else{
    console.log("no");
}
