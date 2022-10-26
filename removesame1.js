// Given a string two strings S1 and S2, remove characters from the S1 which are
//  present in the S2.If S1 becomes empty then print -1
// Input Size : N <= 100000
// Sample Testcase :
// INPUT
// GUVI GEEK
// OUTPUT
// UVI

let str="GUVI GUVI"
let arr=str.split(' ');
let s1=arr[0].split('');
let s2=arr[1];
let x=s1.filter((element,indexing)=>{
    return s2.includes(element)===false
//
})
if(x.length>0){
    console.log(x.join(''))
}
else{
    console.log(-1)
}