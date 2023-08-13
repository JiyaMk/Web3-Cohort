// both a and b are undefined before declaration
// before declaring any variable if you try to access the variable it is called Javascript Hoisting -> the output comes out to be undefined
// if you declare using let then declaration is mandatorily done before calling 
// let and const have local scope

var a=10; 
var b=20;
let x;
console.log(x);
// function declaration
function square(num){
    return num*num;
}

// function declaration using arrow function
var sum= (a,b) => a+b;
console.log(sum(a,b));

// function expression
// var func = function square(num){
//     return num*num;
// }

// console.log(func(a));

var square1 = square(a);
var square2 = square(b);

console.log(square1);
console.log(square2);

// higher order functions-> another function as argument
let a=[1,2,3,4,5];
for (let i=0;i<a.length;i++){
    console.log(a[i]);
}
// Javascript array methods 
// forEach is used to iterate over the array
const b=a.forEach(num=> console.log(num));
// map changes the content of the array and returns the changed array but does not alter the original array
let squaredArray = a.map(function(num){
    return num*num;
});
// declare the above function as arrow function
let squaredArray1 = a.map(num => num*num);

// filter - take out contents of the array based on conditions
// returns a new array
let a = [2,3,7,4,6,9]
function isEven(val){
    return val%2==0;
}
const EvenNumbers = a.filter(isEven);

// reduce - iterate through the contents of the array and get single output 
const result = a.reduce(function(sum,curr){
    return sum+curr;
},0);

// find returns the first element that matches the condition
const result1 = a.find(val=> val<0);

// every - whether every element passes the condition 
// some - if one or more elements are satisfying the condition then it returns true