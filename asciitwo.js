 // You are given a ‘true’ string. String is called true if weight of string is multiple of 8. 
// Your task is to tell whether a string can be declared True or Not. 
// Weight of string is the sum of ASCII value of Vowel character(s) present in the string.

// Input Description:
// You are given as string ‘s’ in lower cases

// Output Description:
// Print 1 for true and 0 for false

// Sample Input :
// raja
// Sample Output :
// 0

let str="raja"
let strsum=0
let strlow=str.toLowerCase()
for(let i=0;i<str.length;i++){
    if(strlow[i]==='a' || strlow[i]==='e' || strlow[i]==='i' || strlow[i]==='o' || strlow[i]==='u'){
        strlow=strlow+str.charCodeAt(i)
    }
}
if(strlow%8===0){
    console.log('1')
}
else{
    console.log('0')
}







// let str="raja";
// let arr=str.split('');
// let sum=0;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]==="a" || arr[i]==="e" || arr[i]==="i" || arr[i]==="o" || arr[i]==="u")
//   {
//     sum=sum+arr[i];
//   }
//   }
//   if(sum%8===0){
//     console.log("1");
//   }
// else{
//     console.log("0");
// }