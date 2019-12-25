# JS Classes

## Learning Objectives

  - Explain the importance of OOJS 
  - Describe the role of ES6 Classes and how they work 
  - Use the `new` keyword to create objects with shared properties
  - Explain the `this` keyword and its scope.

## Opening

We've already gotten exposure to JavaScript objects using object literal notation (i.e., the curly brackets). You might have created a Person object like this:

```js
let person = {
  firstName: 'Ahmed',
  lastName: 'Tahir',
  sayHi: function() {
    console.log("Hi, I'm Ahmed");
  }
}
```

What's nice about the above code snippet? How does it compare to this...

```js
  let firstName = 'Ahmed';
  let lastName = 'Tahir';

  function sayHi(){
    console.log("Hi, I'm Ahmed");
  }
```

<details>
  <summary> 
    <strong>Some thoughts...</strong>
  </summary >
</details>

> * Related properties and methods are packaged together. 
> * Fewer global variables. 
> * Readability.


#### How have we been writing code up until this point?

We have been writing **procedural code**, which basically means we are writing and executing code as we need it. We'll define some variables and functions here, maybe some event listeners there. We end up with a lot of separate pieces that contribute to the overall functionality of an application. This goes against the idea of keeping our code DRY, short for _Don't Repeat Yourself_. 
  
What do we do when we want to go beyond reusing a value which may just be a primitive or an object containing some key/value data? What if we want to clone an object that has _behaviors_ we seek to reuse?

For example, say we are developing a revamped version of the video game Street Fighter. Each character may have their own unique fighting tricks, but in general, all character objects should have at least the same kick and punch abilities. With DRY in mind, when we develop a new fighter object we know we would want to avoid recreating any of these general behaviors and instead code a solution that clones them. We can most easily solve this problem by following patterns driven by Object Oriented Programming.

#### What is an object in programming?

  An object encapsulates related data and behavior in an organized structure.

#### Why might we use an OOP approach to programming?

Object-oriented programming(OOP) provides us with opportunities to clean up our procedural code and model it more closely to resemble the real world.

OOP helps us to achieve the following...
  * **Abstraction:** Determining essential features 
  * **Encapsulation:** Containing and protecting methods and properties 
  * **Modularity:** Breaking down a program into smaller sub - programs

OOP becomes **very** important as our front-end and back-end code grows in complexity. Even a simple app will have lots of code on the front-end to do things like...
  * Send requests to a backend to fetch / update / destroy data 
  * Update the state of the page as data changes 
  * Respond to events like clicking buttons

### Creating Objects

So far, we've had to make our objects 'by hand' (i.e. using object literals)...

```js
var celica = {
  model: 'Toy-Yoda Celica',
  color: 'limegreen',
  fuel: 100,
  drive: function() {
    this.fuel--;
    return 'Vroom!';
  },
  refuel: function() {
    this.fuel = 100;
  }
}

var civic = {
  model: 'Honda Civic',
  color: 'lemonchiffon',
  fuel: 100,
  drive: function() {
    this.fuel--;
    return 'Vroom!';
  },
  refuel: function() {
    this.fuel = 100;
  }
}
```

Even though we're technically using objects to organize our code, we can see a noticeable amount of duplication. Just imagine if we needed a hundred cars in our app! Our code would certainly not be considered "DRY".

As you may have noticed, some of these properties change between cars(`model` and `color`), and others stay the same. For example, `fuel` starts at 100, while the `drive` and `refuel` functions are the same for every car.

Making all of these similar objects by hand is just tedious. What
if we could build a function that makes them for us?

## Classes

### Overview

It's so common that we need to make objects with similar properties and methods that programming languages usually have some features to help with this.

In JavaScript, ES6 provides a feature called **classes** to accomplish this. A class serves as a **blueprint** for instantiating new objects.

It is kind of how 3D printing works.

You have a **blueprint** like the one here.

![](https://media.giphy.com/media/HWICO3FUGCgiQ/giphy.gif)

Which the 3D printer takes and can then print it any number of times.

![](https://media.giphy.com/media/u1XGYJG3KNxiE/giphy.gif)

Let's build out the following `Car` class:

```js
class Car {
  constructor(model, color){
    this.model = model;
    this.color = color;
    this.fuel = 100;
  }
  drive(){
    this.fuel--;
    return "Vroom!";
  }
  refuel(){
    this.fuel = 100;
    return "Fueled up and ready to go!"
  }
}

const celica = new Car("Toy-Yoda Celica", "limegreen");
const civic = new Car("Honda Civic", "lemonchiffon");
```

Classes work a lot like the `makeCar` function we just created, but they're supported by JS and we use the `new` keyword to generate instances of an object (just like our earlier `celica` and `civic` examples).

> Note that classes start with a capital letter to make it obvious that they are classes.  This isn't necessary, but is a convention you should follow.

This should be familiar, we did something similar in Ruby.

```rb
class Car
  def initialize(model, color)
    @model = model
    @color = color
    @fuel = 100
  end

  def drive
    @fuel = @fuel - 1
  end

  def refuel
    @fuel = 100
  end
end
```

### Make a Person Class

```js
class Person {
  // We use the constructor method to initialize properties for a class instance.
  // It takes whatever arguments we want to pass into an instance.
  constructor(initialName){
    this.name = initialName;
    this.species = "Homo Sapiens";
  }
  // We define any methods accessible to an instance outside of the constructor
  speak() {
    return "Hello! I'm " + this.name;
  }
}

const person1 = new Person("Ahmed");
person1.speak(); // "Hello, I'm Ahmed"
```

Notice the use of `this` keyword. Here's why we write classes this way...

When we generate a class instance using `new`, JavaScript will automatically...

  1. Create a new, empty object for us  
  2. Generate a context for that object (`this` -> the new object)
  3. Return the object  

#### Where are the Commas?

Unlike object notation, you do not need to use commas when separating class methods.

### Another Example to Try

```js
class Animals {
  constructor(type, age, sound) {
    this.type = type;
    this.age = age;
    this.sound = sound;
  }
  getOlder() {
    this.age = this.age + 1;
    console.log(this.age);
  }
  makeSound() {
    return this.sound + "! Hello, I'm a " + this.species + ". And I'm " + this.age + " years old.";
  }
}
```

### Make an ATM - Lab 

For this exercise you will be creating an ATM class.

It will have the following properties...
* `type` (e.g., "checking"), which should be determined by some input
* `money`, which should start out as `0`

It should have the following methods...
* `withdraw`, which should decrease the amount of money by some input
* `deposit`, which should increase the amount of money by some input
* `showBalance`, which should print the amount of money in the bank to the console.

The `Atm` class has a `transactionHistory` property which keeps track of the withdrawals and deposits made to the account.

- Make sure to indicate whether the transaction increased or decreased the amount of money in the bank.

### Create a `RecordAlbums` Class - Lab 

It should have the following properties...

- artistName(string)
- albumName(string)
- songs (array of strings)
- currentSong (string from array)

It should have the following methods...

- nextSong(method), which goes to next song and prints out its name
- previousSong(method), which goes to previous song and prints out its name

## Additional Reading

* [MDN Documentation on Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [Introduction to Javascript ES6 Classes](https://strongloop.com/strongblog/an-introduction-to-javascript-es6-classes/)
* https://javascript.info/classes
