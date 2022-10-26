
// Given a string 'S' print the sum of weight of the String. A weight of character is defined 
//  as the ASCII value of corresponding character.

let a="abc";
let b=0;
for (i=0; i<=a.length-1; i++){
b=b+a.charCodeAt(i);

}
console.log(b);