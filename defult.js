//backup ase puran system
function sum (num1, num2){
    if(num2==undefined){
        num2 = 0;
    }
console.log(num1+num2)
}
sum(10)

//backup ase puran system
function addNumber (num1, num2){
    num2 = num2 || 5
    console.log(num1 + num2)
}
addNumber(15)

//backup ase new system
function add(num1=2, num2=6){
    console.log(num1 + num2)
}
add (4)