//function 2 vabe likha jai

//first funtion declaration
function doubleIt(num){
    return num *2
}
const result = doubleIt(500)
console.log(result)

//second method of function declaration
const doubleIt1 = function(num){
        return num*2
}
const result1 = doubleIt1(80);
console.log(result1)


//es6 function
const tripleIt = num=> num*3;

const result2 = tripleIt(5);
console.log(result2)

//types off arrow function single
const doubleIt3 = num => num*5
const result4 = doubleIt3(7)
console.log(result4)

//types off arrow function multiple

const sum1 = (x, y) => x*y
const result5 = sum1(5,6) 
console.log(result5)

//types of arrow peramitar na thakle
const giveMe10 = ()=> 100;
const result6 = giveMe10()
console.log(result6)

//types of arrow for multiple work
const doMath = (x,y)=>{
    const sum = x +y;
    const diff = x-y
    const result = sum * diff
    return result
}
const doMath1 = doMath(6,5);
console.log(doMath1)