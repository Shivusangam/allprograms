let a="xxyzykzz";
let b=a.split('');
let x=b.filter((element,indexing)=>{
    return b.indexOf(element)===indexing
})
let y=x.length;
if(y===3){
    console.log("wonder");
}
else{
    console.log("-1");
}