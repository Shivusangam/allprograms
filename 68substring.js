// Given a string S, print 'yes' if the strings 'GUVI' and 'GEEK'
//  is present case-sensitively in the string else print 'no'.
// Input Size : 1 <= 100
// Sample Testcase :
// INPUT
// Vishal_Sundar prepared this question
// OUTPUT
// no

let str="Vishal_Sundar prepared this question";
let str1="GUVI"
let str2="GEEK"
if( str.includes(str1) && str.includes(str2)){
    console.log("yes")
}
else{
    console.log("no")
}