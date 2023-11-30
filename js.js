//Function

Korrutamine = function(x1, x2) {
    return x1 * x2;
}

//Function parameters

hello = function(parameter1, parameter2) {
    //This is is a parameter
}

//Arrow functions

let hello = "";

hello = () => {
    return "Hello World!";
}

//Before arrow function

hello = function() {
    return "Hello World!"
}

//Default parameters let you set default values for function inputs. 
//If a function is called without providing a value for a parameter, 
//it falls back to the default value you specified.

function greet(name = 'Guest', greeting = 'Hello') {
    console.log(`${greeting}, ${name}!`);
}
  
greet(); // Outputs: Hello, Guest!
greet('John'); // Outputs: Hello, John!
greet('Alice', 'Hi'); // Outputs: Hi, Alice!

//Javascript object methods
//JavaScript methods are actions that can be performed on objects.
//Methods are stored in properties as function definitions.

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

//In JavaScript, the "this" keyword refers to an object.
