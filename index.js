// 👇 COMPLETE YOUR WORK BELOW 👇
/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should recieve a string as a parameter and take some type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach` array.
        + The `eat` method should have no effect if there are 10 items in the `stomach` array.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}


Person.prototype.eat = function(food) { 
  let wanring = `You've reached your daily limit`;
  if (this.stomach.length < 10){
    this.stomach.push(food);
  } else{
    this.stomach.push(wanring);
  }
}

Person.prototype.poop = function(){
  this.stomach = [];
}

Person.prototype.toString = function() {
  return `${this.name}, ${this.age}`;
};

const person1 = new Person('Joe', 24)
person1.eat('burger')
person1.eat('taco')
person1.eat('rice')
person1.eat('beef')
person1.eat('veg')
person1.eat('chicken')
person1.eat('eggs')
person1.eat('milk')
person1.eat('water')
person1.eat('oats')
person1.eat('fish taco')
person1.eat('salad')
person1.eat('megamind')
console.log('Task 1:', person1)
person1.poop();
console.log('Task 1: POOP CHECK', person1)


/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon, tank, odometer) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}
Car.prototype.fill = function(gallons) {
  return this.tank = this.tank + gallons;
}

const car1 = new Car('Ford', 21);
car1.fill(11)
console.log(car1);

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(name, age, favoriteToy) {
  this.name = name;
  this.age = age;
  this.favoriteToy = favoriteToy;
}
Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function(toy) {
  toy = this.favoriteToy;
  return `Playing with ${this.favoriteToy}, ${this.favoriteToy} being the favorite toy.`;
}
const baby1 = new Baby('Lily', 1, 'Bratz')
console.log(baby1);
console.log(baby1.play());


/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. 
  2. 
  3. 
  4. 
*/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}
