const headPhones = ["Headphone1", "Headphone2", "Headphone3", "Headphone4"];

for (let index = 0; index < headPhones.length; index++) {
    console.log(headPhones[index]);
}

headPhones.forEach((headphone) => {
    console.log(headphone);
});

const musicLessons = false;

if (musicLessons === true) {
    return "Depression";
} else {
    return "Happy;"
}

function adding() {
    return number1 + number2;                
}

console.log(adding(3, 6));

function square(number = 1) {
    return number + number;
}

square(4);

function areaCalculator(side1 = 1, side2 = 1) {
    return side1 * side2;        ''                                                                                                                                                                                                                                                                                                                                                                                                                                
}

console.log(areaCalculator(3, 4));

const squareWithArrowFunction = (number = 1) => {
    const answer = number * number;
    return answer;
}

const areaCalculator = (side1 = 1, side2 = 1) => {
    const answer = side1 * side2;
    return answer;
}

(function () {
    console.log("Hakkas tööle");
})()
