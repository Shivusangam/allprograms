
// You are given a string ‘s’. Your task is to print the characters which are not repeated 
// with a single space in between the characters.

// Input Description:
// You are given a string ‘s’.

// Output Description:
// Print the characters present once and -1 if there is no character which satisfy above condition

// Sample Input :
// dabbc
// Sample Output :
// d a c


let str="dabbc";
let arr=str.split("");
let arrnew=[];
let x=arr.filter((element,indexing)=>{
    return arr.indexOf(element)!=indexing
})
for (i=0; i<arr.length; i++){
    if(x.includes(arr[i])===false){
        arrnew.push(arr[i])
      
    }
}

console.log(arrnew.join(" "));
