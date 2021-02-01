class Father{
    constructor(){
        this.FatherName = "Md Nurul Haque"
    }
}


class Child extends Father{
    constructor(name){
        super()
        this.Name = name;

    }
}
const child = new Child("Md rashidul karim")
const child1 = new Child("Md rezaul karim")
console.log(child)
console.log(child1)