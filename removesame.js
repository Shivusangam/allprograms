let a="mississipie";
let b=a.split('');
let d=[];
let x=b.filter((element,indexing)=>{
    return b.indexOf(element)!=indexing
})
for (i=0; i<b.length; i++){
    if(x.includes(b[i])===false){
        d.push(b[i])
      
    }
}

console.log(d.join(""));