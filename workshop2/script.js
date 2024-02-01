// დავალება 1

function isArray(variable) {
    return Array.isArray(variable);
}


let car = ["Audi", "BMW", "Volvo", "Saab"];

let city = ["Tbilisi", "Batumi", "Rustavi", "Gori"];

let persson = {
    fName: "John",
    lastName: "Doe",
    age: 22,
    job: "Plumber"
};

let country = "Georgia";

let century = 21;


if (isArray(century)) {
    console.log("variable1 is an array");
}else {
    console.log("variable is not array");
}



// დავალება 2


function getFirstElement(arr) {
    if (Array.isArray(arr) && arr.length > 0) {
        return arr[0];
    } else {
        return undefined;
    }
}

let firstArray = [5, 8, 12, 3, 7];
let firstElement = getFirstElement(firstArray);

console.log("The first element of the array is:", firstElement);



// დავალება 3

function getLastElement(arr) {
    if (Array.isArray(arr) && arr.length > 0) {
        return arr[arr.length - 1];
    } else {
        return undefined;
    }
}


let twoArray = [5, 8, 12, 3, 7];
let lastElement = getLastElement(twoArray);

console.log("The last element of the array is:", lastElement);


// დავალება 4



