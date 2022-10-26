// // You are given a string ‘s’.Print all the duplicate characters of string.

// // Input Description:
// // String ‘s; is given

// // Output Description:
// // Print only duplicate character and -1 if no character is duplicate.

// // Sample Input :
// // abcddee
// // Sample Output :
// // d e

// // remove duplicates
// // if there is no duplicate then -1


let a="aabbaa";
let b=a.split('');
let d=[];
let x=b.filter((element,indexing)=>{
    return b.indexOf(element)!=indexing
}
)
 if(x.length>0){
    console.log(x.join(""))

}else{
console.log('-1')
}
