//use of const
const name = "Rohim Uddin";
// name = "Rashu"
console.log(name)

//array
const friendsName = ["tariqul", "hasan", "bappi"];
friendsName[0]= "kew nai"
friendsName.push("bondu bandob kamer na")
console.log(friendsName)

//object
const myDetails = {name:"Md Rashidul Karim", age:"28", Phone:"01915555256"}
myDetails.age = "25"
console.log(myDetails)

//use of let

let assignmentNumber = '53'
assignmentNumber = '60'
console.log(assignmentNumber)


//let for loop
let sum = 0;
//var i dhorle baire theke call kore ans pawa jabe,let i dhorle baire theke call kore ans pawa jabe na.
for (var i = 0; i <10; i++) {
    sum = sum + i 
}
console.log(i)

// scope var const let

var examNo = 5
function myfunc(){
var examNo =9
console.log(`${examNo} from myfunc`  )
}
myfunc()
console.log(examNo)
