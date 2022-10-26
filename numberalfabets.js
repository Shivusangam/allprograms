//get the count of each character and print count with characters 

//output : 2A 1s 2B 1a 1e 1d
let str="AsBABaed"//userInput[0]
  
let arr=[]
for(let i=0;i<str.length;i++){
let c=(str.split(str[i])).length-1
  arr.push(c+str[i])
}
let newval=arr.filter((ele,ind)=>{
return arr.indexOf(ele)===ind
})
console.log(newval.join(' '))