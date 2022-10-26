// // You are given a string ‘s’.
// // Your task is to print the string in alternate lowercase and uppercase order.


// let str="abcd efgh ijkl";
// let arr=str.split(' ');
// let str1=arr[0].toUpperCase();
// let str2=arr[1].toLowerCase();
// let str3=arr[2].toUpperCase();
// let str4=str1+" "+str2+" "+str3

// console.log(str4)

//split
//empty array
//for loop
//if i%2===0 {}else{}
//after close for loop console with join
//split
//empty array
//for loop
//if i%2===0 { push upper value}else{ push lower}
//after close for loop console with join


let str="abcd efgh ijkl";
let arr=str.split(' ');
let arr1=[];
for(let i=0; i<arr.length; i++){
    if(i%2==0){
        arr1.push(arr[i].toUpperCase())
       

    }
    else{
        arr1.push(arr[i].toLowerCase())
}
}
console.log(arr1.join(' '))