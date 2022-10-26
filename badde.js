// // Given 2 strings S,X. Print the string after deleting X.If X not found print the same string.
// // Input Size : 1 <= |s|, |x| <= 1000
// // Sample Testcase :
// // INPUT
// // Happy Birthday
// // Happy
// // OUTPUT
// // Birthday



// // let str = "happy birthdays";
// // let arr = str.split(' ');
// // let check = "happy";
// // let newarr = [];
// // for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] != check) {
// //         newarr.push(arr[i])
// //     }
// // }
// // if (newarr.length > 0) {
// //     console.log(newarr.join(' '))
// // }
// // else {
// //     console.log(arr.join(' '))
// // }






// 1. ------------ also known as Pyramid of Doom, is an anti-pattern seen in code of programmers
//  who are not wise in the ways of asynchronous programming.

// ans:callback hell

// 2. Find the ouyput?

// setTimeout(()=> console.log(0), 0);
// console.log(1);
// Promise.resolve(2).then((data) => console.log(data));
// console.log(3);
// setTimeout(()=> console.log(4), 100);
// console.log(5);

// ans:
// 1
// 3
// 5
// 2
// 0
// 4

// 3. Find the output?

// let promise = new Promise(function (a, b) {
//   b();
// });
// promise.then(function () {
//   console.log("Success 1");
// },
// function () {
//   console.log("Failure 1");
// })
// .catch(function () {
//   console.log("Error");
// });

// ans:Failure 1
// 4. store the data in result who is from std 10th

// var arr=[{
// "name": 'ab c',
// "Science score": 90,
// "Maths score": 90,
// "English score": 90,
// "std": '10th'
// },{
// "name": 'xy z',
// "Science score": 90,
// "Maths score": 90,
// "English score": 90,
// "std": '9th'
// },{
// "name": 'P K',
// "score": 50,
// "Science score": 70,
// "Maths score": 50,
// "English score": 50,
// "std": '10th'
// }]


// 5. Find the output?

// function guvi(){

//     var a=10;

//     console.log(a,b);

//     var b=20;

// }

// guvi();

// ans: 10 undefined

// 6. Find the output?

// var a=10;

// console.log(typeof typeof a);
//  ans:string

// 7.
//  function foo(x) {
//     console.log( x);
//     return 20;
// }
// function bar(y) {
//     console.log( y);
//     return 10;
// }
// function baz(z) {
//     console.log(z);
//     return 40;
// }
// Promise.resolve(5)
//     .then(foo)
//     .then(bar())
//     .then(baz);


//     ans:undefined
//     5
//     20
// 8. Find the output?

// var guvi = [65, 44, 12, 4];

// var geek = guvi.map( e => e*10);

// console.log(geek);

// ans:[ 650, 440, 120, 40 ]
// 9. Find the output?

// var guvi = ['a', 'b', 'c'];

// var geek = guvi;

// geek[1] = 10;



// console.log(guvi);

// [ 'a', 10, 'c' ]

// 10. ---------- function is a function passed into another function as an argument,
// which is then invoked inside the outer function to complete some kind of routine or action.

// ans:callback function



// 11.  -------------object represents the eventual completion (or failure) of an asynchronous operation,
//  and its resulting value.

//  ans: The Promise object

// 12. Find the output?

// await resolveAfter2Seconds(x) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(x);
//         }, 2000);
//     });
// }

// async function f1() {
//     var x = await resolveAfter2Seconds(10);
//     console.log(x);
// }

// f1();

// 13. -----------operator is used to wait for a Promise. It can only be used inside an ----------- function.

//  ans: The await operator and async

// 14. ----------------- functions operate in a separate order than the rest of the code via the event loop,
// returning an implicit Promise as its result.

// ans:Asynchronous functions

// 15. ------------ refers to operations that block further execution until that operation finishes.
// ans:Blocking

// 16. Find the correct syntax fetch

//  let promise = fetch(url, [options])
//  let promise = fetch(url)
//  both A & B
//  none of the above

//  ans: both A & B

//  17. Find the Error?

// const isGreater = (a, b) => {  //line1

//     return new Promise((resolve, reject) => {

//         if (a > b) {

//             resolve(true)

//         }

//         else {

//             reject(false)

//         }

//     })

// }

// isGreater(1, 2).then(result => {

//     console.log('greater')

// })

//     .catch(result => {

//         console.log('smaller')

//     })

// ans: smaller
// 18. Does the async and defer are same in nature of executing the scripts in browser?
// ans : In practice, defer is used for scripts that need the whole DOM and/or their relative execution order is important.
// And async is used for independent scripts, like counters or ads
// . And their relative execution order does not matte

// 19.
// var arr = [12, 31, 7];
// sum = 0;
// console.log(arr.reduce((sum, e) => sum += e));

// ans:50

// 20.
// Find the output

// var arr = [56, 73, 12, 31, 7, 17];
// console.log(arr.filter(e => e <= 18));

// ans: [12, 7, 17]


// 21. 
// An asterisk (*) is used to select what?

// ans: It can be used to select any and all types of elements in an HTML page. 

// 22. The CSS property used to set the minimum width of the element's content box is -

// ans:min-width CSS property
// 23. What is the correct way to create a border?

//  border: solid grey 1px
//  border: 1px solid grey
//  Both are correct ways

//  ans: border: 1px solid grey

// 24. Which style is this?

// <body style="background-color: lightcyan">

//     ans: inline css

// 25. What's the correct sequence of box model from inside-out?

// content , padding , border, margin

// 26. The CSS property used to set the maximum height of the element's content box is -
// ans: max-height CSS property

// 27. Which of the following function defines a linear gradient as a CSS image?

//  grayscale()
//  image()
//  gradient()
//   linear-gradient()

//   ans: linear-gradient()

// 28. Which of the following CSS list properties is/are correct?

// ans:A. Set different list item markers for ordered lists

// B. Set different list item markers for unordered lists

// C. Set an image as the list item marker

// 29. A _____ is used to define a special state of an element.
// ans:pseudo-class


// 30.  What will be the output of following code snippet?

// {color: red text-decoration: underline; font-style: italic;}

// 31. Which HTML element is used to define important text?
// ans:<strong> 

// 32. Which of these is a block element?
// ans:: <p> and <div>.

// 33. Which of these is not a <head> section element?

//  <title>
//  <header>
//  <meta>
//  <link>

//  ans: <header>

// 34. How many heading tags are there in HTML?
// 6

// 35. Which of these is not an input type?

//  File
//  Radio
//  List
//  Submit

//  ans:list 
// 36. What table will be rendered?

// <table> 
// <tr> 
// <td>50 pcs</td> 
// <td>100</td> 
// <td>500</td> 
// </tr> 
// <tr> 
// <td>10 pcs</td> 
// <td>5</td> 
// <td>50</td> 
// </tr> 
// </table>
//  A table with 2 rows and 3 columns
//  A table with 3 rows and 2 columns
//  A table with 2 rows and a column

// ans : a


// 37. What is the correct way to define a link?

//  <a url="path/to/file">Link</a>
//  <a link="path/to/file">Link</a>
//  <a href="path/to/file">Link</a>

//  ans:c 

// 38. Which tag is used to create a new line?

//  <break>
//  <br>
//  <b>
//  <new>

//     ans:br 

// 39. Which of these is a valid password field?

//  <text type="password">
//  <password>
//  <input type="password">

//     ans: <input type="password">

// 40. Which is the correct syntax for textarea?

//  <textarea>
//  <input type="textarea">
//  <input type="textbox"></input>

//  ans: <textarea>
const isGreater = (a, b) => {  //line1

    return new Promise((resolve, reject) => {

        if (a > b) {

            resolve(true)

        }

        else {

            reject(false)

        }

    })

}

isGreater(1, 2).then(result => {

    console.log('greater')

})

    .catch(result => {

        console.log('smaller')

    }) //line16