function name(a){
console.log("Hello",a);
}

name()
name("Brother")
//-------------------
//Arrow Function
const sum = (a,b) => {
    console.log(a+b);
}

let x =2
let y =5
sum(x,y)
//--------------------

const sum2 = (a,b,c,d) => {
    return a + b+ c - d
}

let result = sum2(4,5,6,9)
console.log(result);
//--------------------

//IIFE - immediately invoked

console.log((function iife(a,b){
    return a/b
})(4,8)) //0.5

//--------------------

//-------------------------------------------------------------

//ARRAY

let anonymous = [1,null,undefined,true,"apple"]
let fruits = ["mango","banana","apple"]

console.log(fruits.length); //3
//push() and unshift() -->> to add the elements inside the array at 1st and last position

//pop() and shift() -->> to remove the same elements from 1st and last indexes

console.log(fruits.splice(1,1,"pineapple"));


let num = [10,20,30,40,50]
let num2 = [45,67,44,89,33]

//1
for (let i = 0; i < num.length; i++) {
    console.log(num[i], i);   
}

//2
 num.forEach((el,i) => {
    console.log(el,i)
})

//3
const mapp = num.map((num) => {
    return num + 2
})
console.log(mapp);

//4
const add = num.concat(num2)
console.log(add);

//5
const rev = add.reverse()
console.log(rev);

//6
const sort = rev.sort((a,b) => {
    return a - b
})
console.log(sort);

//7
const slice = sort.slice(1,4)
console.log(slice);

//8
const filter = sort.filter((e) => {
    return e % 2 === 0
})
console.log(filter);

//9
const reduce = filter.reduce((acc,curr)=>{
    return acc + curr
},0)
console.log(reduce);
