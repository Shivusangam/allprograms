// You are given a string.Your task is to print only the consonants present in the string 
// without affecting the sentence spacings 
// if present. If no consonants are present print -1.


let a="I am shrey";

let c=[];
let b=a.toLowerCase();
console.log(b)
for(let i=0; i<a.length; i++){
    if(b[i]!="a" || b[i]!="e" || b[i]!="i" || b[i]!="o" || b[i]!="u")
  {
    c.push(a[i])
  }
  }

  console.log(c)


  
