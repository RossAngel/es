// // // "ude strict"
// // // a=5;
// // // console.log(a);

// // // var Fname = "lone"
// // // console.log(Fname.length);
// // // console.log(typeof(Fname));

// // var data = "This is a text message"
// // // console.log(data.indexOf('txt'));
// // // console.log(data.indexOf("txt","text"));
// // // console.log(data);
// // // console.log(data.split(','));
// // console.log(data.trim());

// // let fruits = ["Aplle","Mango","Orange","Grapes"];
// // console.log(Array.isArray(fruits));
// // // foreach
// // fruits.forEach(function(item){
// //     console.log(item)
// // });
// let numb = [20,30,58,65];
// numb.forEach(function(item,ind){
//     numb[int]=item<50
// })
// console.log(numb)


// var obj1 =JSON.parse ('{"name":"Lone","age":"10"}');
// console.log(obj1)
// var obj2=JSON.stringify(obj1);
// console.log(obj2)

// function sum(a,b){
//     var s=a+b;
//     console.log(`The sum is ${s}`);
// }
// sum(10,20);
// var add = (c,d)=>{   
//     console.log(`the sumis ${c+d}`);
// }
// add(10,1)

// var sub = (c,d)=>{   
//     console.log(`the ans is ${c-d}`);
// }
// sub(10,1)



// // spread opreator

// var a=[5,2,8,9,41];
// var b=[7,18,6,2,47];
// var c=[...a,...b];
// console.log(c);
// var d=[2,3,...b];
// console.log(d);

// Array destructuring
var[q,r,s]=[2,3,4];
console.log(r);
var [p,,w]=[2,5,8]
console.log(w)
var[h,,j,...l]=[1,2,3,4,5,6,7]
console.log(l)
