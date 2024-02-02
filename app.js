var a = 10;
var b = 20;

// regular functions
function sum(x,y){
    return x + y;
}
console.log(sum(a, b));

function difference(x,y){
    return x - y;
}
console.log(difference(b, a));

function multiply(x,y){
    return x * y;
}
console.log(multiply(b, a));

function division(x,y){
    return x / y;
}
console.log(division(b, a));

// arrow functions
const sum = (x,y) =>{
    return x + y;
}
console.log(sum(a, b));

const difference = (x,y) =>{
    return x - y;
}
console.log(difference(b, a));

const multiply= (x,y)=>{
    return x * y;
}
console.log(multiply(b, a));

const division= (x,y)=>{
    return x / y;
}
console.log(division(b, a));