// Given a sentence and string S, find how many times S occurs in the given 
// sentence.If S is not found in the sentence print -1
// Input Size : |sentence| <= 1000000(complexity O(n)).
// Sample Testcase :
// INPUT
// I enjoy doing codekata
// codekata
// OUTPUT
// 1

let str="i enjoy doing codekata";
let c=0;
for (let i=0; i<str.length; i++ ){
    if(str[i].includes("codekata")){
    c=c+1
    }
    
   
}
if(c>0){
console.log(c)
}
else{
    console.log(-1)
}

