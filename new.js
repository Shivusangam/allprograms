// // Get all the countries with population of less than2 lakh using filter method.

// let xhr=new XMLHttpRequest()
// xhr.open('GET',"https://restcountries.com/v2/all")
// xhr.onload=function(){
//     if(xhr.status>200&&xhr.status<300){
//         let data=JSON.parse(this.response)
//         letnexval=data.filter((Element)=>{
//             return Element.population<"2 lakh"
//         })
//         console.log("nexval");
//     }
//         else {
//             console.log("no data");
//         }
//     }

// xhr.send();



// let xhr=new XMLHttpRequest()

// xhr.open('GET',"https://restcountries.com/v2/all")
// xhr.onload=function(){
// if(xhr.status>=200 && xhr.status<300){
//     let data=JSON.parse(this.response)
//     let nexval=data.filter((ele)=>{
//         return ele.region==="Asia"
//     })
//     console.log(nexval)
// }
// else{
//     console.log("No data")
// }

// }
// xhr.send()


// let str="1331"
// let arr=str.split('')
// for(let i=0;i<arr.length-1;i++){
//  if(arr[i]===arr[i+1]){
//        arr.splice(i, 2) 
//     }
// }
// if(arr.length>=0){
//     console.log(arr.join(' '))

// }else{
// console.log("-1")
// }


 let str="1331"
//convering to array
let arr=str.split('')
//iterating array 0 to arr.length-1
for(let i=0;i<arr.length;i++){

    //checking current with next one 
    if(arr[i]===arr[i+1]){
        //if both next to next value same remove thosw two value from array 
       arr.splice(i, 2) 
    }
}

if(arr.length>=0){
    console.log(arr.join(' '))

}else{
console.log("-1")
}
