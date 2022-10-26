// Jennyfer is fond of strings. She wants to read the character from right to 
// left (reverse the string), so she wants you to design a suitable algorithm which satisfy her desire

let str="jennyfer";
let arr=str.split('');
let strnew=arr.reverse().join('');
let str1=strnew[0].toUpperCase(0)+strnew.slice(1,strnew.length-1)
console.log(str1);