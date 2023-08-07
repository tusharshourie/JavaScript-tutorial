                        //ARROW FUNCTION

//COMPACT ALTERNATIVE TO A TRADITIONAL FUNCTION
/*
const greeting = (userName) => console.log(`Hello ${userName}`);
greeting("Tushar");
*/

// const percent =(x,y)=>  x/y*100;
// console.log(`${percent(75,100)}%`);

// let grades = [100,50,90,60,80,70];
// grades.sort((x,y) =>y-x);
// grades.forEach((element)=>console.log(element));



                        //SHUFFLE AN ARRAY

/*
let cards=["A","1","2","3","4","5","6","7", "8","9", "10", "K", "Q", "J"];

shuffle(cards);
console.log(...cards);
function shuffle(array){
    let currentIndex = array.length;
    while(currentIndex!=0){
        let randomIndex = Math.floor(Math.random() * array.length);
        currentIndex -=1;

        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
}

*/



                        //NESTED FUNCTION

/*
let userName ="bro";
let userInbox = 0;
login();

function login(){
    displayuserName();
    displayuserInbox();

    function displayuserName(){
        console.log(`Welcome ${userName}`);
    
    }
    function displayuserInbox(){
        console.log(`You have ${userInbox} new messages`);
    }

}  
*/



                        //MAPS

//object that holds key value pairs of any data type

/*
const stores = new Map([
    ["tee", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50]
]);

let shoppingCart = 0
// shoppingCart += stores.get("tee");
// shoppingCart += stores.get("underwear");

// stores.set("hat" ,40);
// stores.delete("hat");
// console.log(stores.has("underwear"));

// console.log(stores.size);
stores.forEach((value, key) => console.log(`${key} ${value}`));
*/


                    //OBJECTS

//objects = group of properties and methods
// properties = what an object has
//methods = what an object has to do
// use . to access properties/methods

// const car1 = {
//     model:"mustang",
//     color:"red",
//     year:2023,

//     drive: function(){
//         console.log("You Drive the car");
//     },
//     brake: function(){
//         console.log("You step on the brakes");
//     }
// }

// console.log(car1.model);
// console.log(car1.color);
// console.log(car1.year);

// car1.drive();
// car1.brake();


// const car2 = {
//     model:"corvette",
//     color:"yellow",
//     year:2021,

//     drive: function(){
//         console.log("You Drive the car");
//     },
//     brake: function(){
//         console.log("You step on the brakes");
//     }
// }

// console.log(car2.model);
// console.log(car2.color);
// console.log(car2.year);

// car2.drive();
// car2.brake();



                        //THIS KEYWORD

//this= reference to a particular object
//      the object depends on the immediate context

/*
const car1 = {
    model:"mustang",
    color:"red",
    year:2023,

    drive: function(){
        console.log(`You drive the ${this.model}`);
    },
    brake: function(){
        console.log("You step on the brakes");
    }
}


const car2 = {
    model:"corvette",
    color:"yellow",
    year:2021,

    drive: function(){
        console.log(`You drive the ${this.model}`);
    },
    brake: function(){
        console.log("You step on the brakes");
    }
}


car1.drive();
car2.drive();
*/



                        //CLASSES

//class = a blueprint for creating objects define what properties and method they have
// use a constructor for unique properties

/*
class Player{
    score=0;

    pause(){
        console.log("You paused the game");
    }

    exit(){
        console.log("you exited the game")
    }
}

const player1 = new Player();
const player2 = new Player();

player1.score +=1;

console.log(player1.score);
console.log(player2.score);

player1.pause();
player2.exit();
*/


                //CONSTRUCTORS

//constructor = a special method of a class, accepts arguments and assigns properties

/*
class Student{
    constructor(name, age, gpa){
        this.name=name;
        this.age=age;
        this.gpa=gpa;
    }
    study(){
        console.log(`${this.name} is studying`);
    }
}

const student1 = new Student("Snoop Dogg", 32, 4.2);
console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();
*/



                        //STATIC KEYWORD

//static = belongs to class, not the objects
// properties: useful for caches, fixed configuration
// methods: useful for utility functions

/*
class Car{
    static numberOfCars =0;
    constructor(model){
        this.model = model;
        Car.numberOfCars +=1;
    }

    static startRace(){
        console.log("3....2.....1......GO");
    }
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("BMW");

console.log(Car.numberOfCars);
Car.startRace();
*/


                        //INHERITANCE

//inheritance = a child class can inherit all the methods and properties from another class

/*
class Animal{
    alive = true;
    
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name ="rabbit";
    run(){
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal{
    name ="fish";
    swim(){
        console.log(`This ${this.name} is swiming`);
    }
}

class Hawk extends Animal{
    name ="hawk";
    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();
*/



                        //SUPER KEYWORD

//super = refers to the parent class
// commonly used to invoke constructor of a parent class
/*
class Animal{
    constructor(name, age){
        this.name=name;
        this.age=age; 
    }

}

class Rabbit extends Animal{
    constructor(name, age, runspeed){
        super(name, age);
        this.runspeed =runspeed;
    }

}
class Fish extends Animal{
    constructor(name, age, swimspeed){
        super(name,age);
        this.swimspeed =swimspeed;
    }
}

const rabbit = new Rabbit("Peter", 1, 40);
const fish = new Fish("Nemo", 2, 80);
console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runspeed);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimspeed);

*/



                        //GETTERS & SETTERS

//get = binds an object property to a function
// when that property is accessed

//set = binds an object property to a function when that property is assigned a value
/*
class Car{
    constructor(power){
        this._gas =25;
        this._power=power;
    }
    get power(){
        return `${this._power}hp`;
    }
    
    get gas(){
        return `${this._gas}L (${this._gas/50 *100}%)`;
    }
    set gas(value){
        if(value>50){
            value =50;
        }
        else if(value<0){
            value =0;
        }
        this._gas =value;
    }
}

let car =  new Car(400);

car.gas =10000;

console.log(car.power);
console.log(car.gas);
*/


                        //OBJECTS AS ARGUMENTS

/*
class Car{
    constructor(model, year,color){
        this.model = model;
        this.year=year;
        this.color=color;
    }
}

const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("corvette", 2024, "blue");

function displayInfo(car){
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);
}


displayInfo(car2);

changeColor(car1, "gold")

function changeColor(car, color){
    car.color = color;
}

displayInfo(car1);
*/


                        //ARRAY OF OBJECTS

/*
class Car{
    constructor(model, year,color){
        this.model = model;
        this.year=year;
        this.color=color;
    }

    drive(){
        console.log(`you drive the ${this.model}`);
    }
}

const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("corvette", 2024, "blue");
const car3 =new Car("Lambo", 2022, "yellow");
const car4 =new Car("Ferrari", 2024, "white");

const cars =[car1, car2, car3, car4];
// console.log(cars[0].model);
// console.log(cars[1].model);
// console.log(cars[2].model);

// cars[0].drive();
// cars[1].drive();
// cars[2].drive();

startRace(cars);
function startRace(cars){
for(const car of cars){
        car.drive();
    }

}
*/


                        //ANONYMOUS OBJECTS

//anonymous objects= Objects without a name
//                  Not directly referenced
//                  Less Syntax. No need for unique names

/*
class Card{
    constructor(value, suit){
        this.value = value;
        this.suit=suit;
    }
}


let cards =[ new Card("A", "Hearts"),
            new Card("A", "Spades"),
            new Card("A", "Diamonds"),
            new Card("A", "Clubs"),
            new Card("2", "Hearts"),
            new Card("2", "Spades"),
            new Card("2", "Diamonds"),
            new Card("2", "Clubs")];


cards.forEach(card => console.log(`${card.value} ${card.suit}`));
*/