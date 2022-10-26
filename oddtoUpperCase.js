// Given a string and a number K, change every kth character to 
// uppercase from beginning in string.
// Sample Testcase :
// INPUT
// string 2
// OUTPUT
// sTrInG



let str=userInput[0].split(' ')[0]
let arr=str.split('')
let k=Number(userInput[0].split(' ')[1])
let newstr=""
if(k>0){
for(let i=k-1;i<arr.length;i=i+k){
    
        newstr=  str[i].toUpperCase()
        arr.splice(i,1,newstr)

}
console.log(arr.join(''))
}
else{
console.log(str)
}