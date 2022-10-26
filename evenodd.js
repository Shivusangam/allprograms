// Given a string 'S' swap the even and odd characters starting from index 1
// (Assume the index starts from 0).
let str="codekata"
let str_alt=""
for(let i=0;i<str.length;i=i+2){
    str_alt=str_alt+str[i+1]
    str_alt=str_alt+str[i]

}
console.log(str_alt)

//tracing
//-> i=0;
// str_alt=str_alt+str[i+1]=>""+"o"=>str_alt="o"
// str_alt=str_alt=str[i]=>"o"+"c"=>str_alt="oc"
//str_alt="oc"


//->i=i+2
// str_alt=str_alt+str[i+1]=>"oc"+"e"=>str_alt="oce"
// str_alt=str_alt=str[i]=>"oce"+"d"=>str_alt="oced"
//str_alt="oced"


// 32,34,37,38,39