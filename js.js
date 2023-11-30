//Function

Korrutamine = function(x1, x2) {
    return x1 * x2;
}

//Function parameters

Hello = function(parameter1, parameter2) {
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
