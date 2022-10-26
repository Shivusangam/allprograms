// You are given two strings . Your task is to tell whether the pair of strings is panagram.
// A pair of strings are said to be panagram if they both 
// are palindrome and are anagram of each other.

// Input Description:
// You will be given two strings ‘s1’ and ‘s2’

// Output Description:
// Print 1 if they are panagram and 0 if they are not

// Sample Input :
// nitin intni
// Sample Output :
// 1

let str="nitin intni"
let arr=str.split(' ');
let str1=arr[0].split('').sort().join('')
let str2=arr[1].split('').sort().join('')
if(str1===str2){
    console.log(1) 
        
    }
    else{
        console.log(0)
    }
