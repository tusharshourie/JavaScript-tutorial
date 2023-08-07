                        //ARRAYS

/*
let fruits = ["apple", "orange", "banana"];
fruits[1] = "coconut";

fruits.push("lemon");
fruits.pop();
fruits.unshift("mango");  //add element to the beginning
fruits.shift();           // removes the element from the beginning

let index = fruits.indexOf("apple");
console.log(fruits);
console.log(fruits.length);
console.log(index);
*/

// let prices =[5,10,15,20];

// for(let i=0; i<prices.length; i++){
//     console.log(prices[i]);
// }

// for(let price of prices){
//     console.log(price);
// }



                        //SORT AN ARRAY OF STRINGS

/*
let fruits=["apple", "orange", "mango", "banana"];

// fruits = fruits.sort();
fruits = fruits.sort().reverse();   //reverse sort
for(let fruit of fruits){
    console.log(fruit);
}
*/


                        //2D ARRAYS


/*
let fruits=     ["apples", "oranges", "mangoes", "bananas"];
let vegetables =["potatoes", "onions", "carrots", "raddishes"];
let meats =     ["eggs", "chicken", "fish", "beef"];

let groceryList = [fruits, vegetables, meats];
groceryList[0][0] = "grapes";

// for(let list of groceryList){
//     console.log(list);
// }

for(let list of groceryList){
    for(let food of list){
        console.log(food);
    }
}
*/



                        //SPREAD OPERATOR


//allows an iterable such as an array or a string to be expanded in places
//where zero or more arguments are expected (unpacks the elements)
// ... = spread operator

/*
let userName ="tushar shourie";
let numbers = [1,2,3,4,5,6,7,8,9];
console.log(...numbers);
console.log(...userName);
*/

/*
let numbers = [1,2,3,4,5,6,7,8,9];
let maximum = Math.max(...numbers);
console.log(maximum);
*/

/*
let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr.Krabs", "Plankton"];
class1.push(...class2);

console.log(class1);
*/



                        //REST PARAMETERS
                    
// represents an indefinite number of parameters (packs arguments into an array)
//...

/*
let a=1;
let b=2;
let c=3;
let d=4;
let e=5;
let f=6;

console.log(sum(a,b,c,d));

function sum(...numbers){
    let total =0;
    for(let number of numbers){
        total+=number;
    }
    return total;
}
*/




                        //CALLBACK


//a function passed as an argument to another function

//ensures that a function is not going to run before a task is completed
// Helps us develop asynchronous code
// (When one function has to wait for another function)
// that helps us avoid errors and potential problems
// Ex. eait for a file to load

/*
sum(2,3, displayConsole);
sum(2,3, displayDom);

function sum(x, y, callback){
    let result = x+y;
    callback(result);
}

function displayConsole(output){
    console.log(output);
}

function displayDom(output){
    document.getElementById("mylabel").innerHTML = output;
}
*/


                        //array.forEach()


//executes a provided callback function once for each array element
/*
let students = ["abc", "def", "ghi"];
students.forEach(capitalize);
console.log(students[0]);
students.forEach(print)

function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);

}

function print(element){
    console.log(element);
}
*/



                        //array.map()


//executes a provided callback function once for every array element and
//creates a bew array
/*
let numbers =[1,2,3,4,5,6];
let squares = numbers.map(square);
squares.forEach(print);

let cubes = numbers.map(cube);
cubes.forEach(print);


function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}

function print(element){
    console.log(element)
}
*/



                        //array.filter()


//creates a new array with all the elements that pass the test provided by a function
/*
let ages =[18,16,21,22,17,19,90];
let adults=ages.filter(checkAge);

adults.forEach(print);

function checkAge(element){
    return element>=18;
}

function print(element){
    console.log(element);
}
*/



                        //array.reduce()


//reduces an array to a single value
/*
let prices =[100,56,3,12,25];
let total = prices.reduce(checkOut);
console.log(`The total is ${total}`);
function checkOut(element, total){
    return total+element;
}
*/


                        //sort an array of numbers

/*
let grades =[100,43,90, 60, 55, 34,69];
// grades = grades.sort(descSort);
grades = grades.sort(ascSort);
grades.forEach(print);

function descSort(x,y){
    return y-x;
}

function ascSort(x,y){
    return x-y;
}

function print(element){
    console.log(element);
}
*/


                        //FUNCTION EXPRESSION


//function without a name (anonymous function) avoid polluting the global
//scope with names.
//write it, then forget about it.
/*
const greeting = function(){
    console.log("Hello!");
}

greeting();
*/

let count =0;

    document.getElementById("incbutton").onclick = function(){
        count+=1;
        document.getElementById("mylabel1").innerHTML = count;

    }

    document.getElementById("decbutton").onclick = function(){
        count-=1;
        document.getElementById("mylabel1").innerHTML = count;

    }