// // palindrome


// let str="gadakshsj"
// let arr=str.split('');
// let strnew=arr.reverse().join('');
// if(str===strnew){
//     console.log(1);
// }
// else{
//     console.log(0);
// }

// ----------------------------or-------------------------------

let str="gadag";
let arr=str.split('');
let strnew=[];
for (let i=arr.length; i>=0; i--){
    strnew.push(arr[i])
}
if(str===strnew.join('')){
    console.log(1);
}
else{
    console.log(-1) 
        
    }

