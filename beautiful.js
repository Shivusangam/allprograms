// You are given a string ‘s’. Your task is to tell whether string is beautiful or not.A beautiful
//  string is a string in which String starts with ‘a’ or
//  ‘A’ and middle element is either ‘m’ or ‘M’ and last element is ‘z’or ‘Z’


let str="Amz";
let str1=str.toLowerCase();
let str2=Math.floor((str.length-1)/2);
let str3=Math.floor(str.length-1);

    if(str1[0]==='a' && str1[str2]==='m' && str1[str3]==='z'){
console.log(1);
    }
    else{
        console.log(0);
    }






