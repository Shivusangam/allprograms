let n=5//userInput[0]
  let str="2 4 3 4 2"////userInput[1]
  let arr=str.split(" ")
  let mid=Math.ceil(arr.length/2)
   let arr1=arr.slice(0,mid)
  let arr2=arr.slice(mid,arr.length)
    let ar_avg1=arr1.reduce((a,b)=>{
       return (Number(a)+Number(b))
    },0);
  let ar_avg2=arr2.reduce((c,d)=>{
  	return (Number(c)+Number(d))
  },0)
    if(ar_avg1/arr1.length===ar_avg2/arr2.length){
    console.log("yes")
    }
  	else{
    console.log("no")
    }