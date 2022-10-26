// // Given a string S, print it without using semicolon in your program.


// let str="hello , world";
// let arr=str.split(',').join('');

// console.log(arr);

let str="hello , world";
let str1='';
for (let i=0; i<str.length; i++){
    if(str[i]!=','){
        str1=str1+str[i];

    }
  
}
console.log(str1)