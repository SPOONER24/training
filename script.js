//Define a class
function Cat(name) {
    this.name = name;
}

//Method that Cat objects will be able invoke
Cat.prototype.printName = function(){
    console.log(this.name);
};

//Call new objects
var cat = new Cat("muncuk");

//Invoke the method
cat.printName();

