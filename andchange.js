// Given a sentence interchange the between the word 'and'.
// Input Size : |S| <= 1000000
// Sample Testcase :
// INPUT
// jack and jill went up and down to get water
// OUTPUT
// jill and jack went down and up to get water




// input string
let str="jack and jill went up and down to get water"
// convert string into array with help of split method for 
// one is original and one more is for splice purpose
let arr=str.split(' ')
let arr1=str.split(' ')
// for applyied for loop accessing every one indexing
for(let i=0;i<arr.length;i++){
    // for using if for applying condition for check with arrya of i is trible equal to and 
    if(arr[i]==="and"){
        // change the value with help of splice method
        // sytax--> arr1.splice(index,deletecount,newvalue)
        arr1.splice(i-1,1,arr[i+1])
        arr1.splice(i+1,1,arr[i-1])
    }
}
console.log(arr1.join(' '))