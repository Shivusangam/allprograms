// Given a string S, print it after changing the middle element to * (if the length of the string is even, 
//     change the 2 middle elements to *).
// Sample Testcase :
// INPUT
// hello
// OUTPUT
// he*lo
let str="hellou";
let strnew=''
let str1='';
let len=str.length/2;
    if(str.length%2!=0){
      
let len1=Math.floor(len)
strnew=str.replace(str[len1+1],"*")
        console.log(strnew)
}
else{
    strnew=str.replace(str[len],"*")
    console.log(strnew.replace(str[len],"*"))
}