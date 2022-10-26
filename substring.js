// You are given two string ‘s1’ and ‘s2’. You have to tell whether these form pair of (strset)
//  A pair of strings is said to be str set if one string is substring of other.

// Input Description:
// You are given two strings ‘s1’ and ‘s2’

// Output Description:
// Print Yes if they form strset and No if they don’t.

// Sample Input :
// abc ab
// Sample Output :
// Yes


let str="abc a";
let arr=str.split(' ');
if(arr[0].includes(arr[1]) || arr[1].includes(arr[0])){
console.log("yes")
}
else{
    console.log("no")
}