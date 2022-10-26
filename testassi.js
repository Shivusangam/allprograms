// Given 2 numbers N and Q followed by N numbers.Now Q inputs of 2 Numbers U and V are given. U indicates the starting index and V indicates the ending index. So for each U,V find the minimum of all values of the array from the index U to V(1 based indexing)
// Input Size: N<=100000

// example

// INPUT

// 5 3

// 1 1 1 1 1

// 1 3

// 2 4

// 3 4

// OUTPUT

// 1

// 1    

// 1


const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
  inp.on("line", (data) => {
  userInput.push(data);
});
inp.on("close", () => {
 // const inputString = userInput.toString();
  //const inputArray = inputString.split(',');
  //console.log(inputArray);// array of given inputs
// your code goes here


  let str=userInput[0]
    let str1=userInput[2]
   let Numbers=str1.split(' ')
    let arrx=str1.split(' ')
    let empty=[]
   //let UVInputs=[]
   let arr=userInput.splice(3,userInput.length-1)

   /*for(let i=0;i<arr.length;i++)
   {
     if(arr[i]!=""){
     UVInputs.push([Number(arr[i].split(' ')[0]),Number(arr[i].split(' ')[1])])
     }
   }*/
   let n=Number(str.split(' ')[0])
     let q=Number(str.split(' ')[1])
     let result=[];
  for(let i=0;i<arr.length;i++){
    //result.push(Math.min(...Numbers.slice(UVInputs[i][0],UVInputs[i][1])))
    if(arr[i]!=""){
      let x=arr[i].split(' ')
      let newarr=arrx.slice(Number(x[0]),Number(x[1]+1))
       let min=newarr[0]
       for(let j=0;j<newarr.length;j++){
         if(min>=newarr[j]){
         min=newarr[j]
         }
       }
      empty.push(min)
    }
    else{
    empty.push("")
    }
  }
 // let x=result.join(',')
    for(let i=0;i<empty.length;i++){

        console.log(empty[i])

    }
});

//input: "5 3\n1 2 4 1 1\n1 3\n2 4\n3 4"
//input: "5 3\n1 2 4 1 5\n1 3\n2 4\n3 4"
//input: "5 3\n1 1 1 1 1\n1 3\n2 4\n3 4"
//input: "5 3\n1 1 1 1 1\n1 3\n2 4\n3 4"
