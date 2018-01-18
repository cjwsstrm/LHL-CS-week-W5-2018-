// ----- Abstraction -----

class Pizza {
  constructor() {
    this.toppings = '';
  }
}

let pizza = new Pizza();

pizza.toppings = pizza.toppings + 'cheese';
pizza.toppings = pizza.toppings + ', mushrooms';

// using a string to store toppings is inconvenient and inefficient.


class PizzaArray {
  constructor() {
    this.toppings = [];
  }
}

let pizzaArray = new PizzaArray();

pizzaArray.toppings.push('cheese');
pizzaArray.toppings.push('mushrooms');

// changing from a string to an array as above, means that any code that uses the array has to change to work with the array syntax instead.


class PizzaAbstracted {
  constructor() {
    this.toppings = [];
  }
  addTopping(topping) {
    if (topping.indexOf(topping) > -1) { // Here we've added a check to see if the topping already has been added to the pizza.
      return false;
    }
    this.toppings.push(topping);
    return true  
  }
}

let pizzaAbstracted = new PizzaAbstracted();

PizzaAbstracted.addTopping('cheese');
PizzaAbstracted.addTopping('mushrooms');

// Above we have hid the internal array from public view, by instead providing a method that adds toppings to the array. The method is public, the array is not.
// This way, if we want to change how to store the toppings, the code only has to change inside the Pizza class, the rest of the code can remain intact.
// You can also add logic to the class without altering outside code, like checking for if the topping has already been added.


// ------ Public vs Private ------

class PizzaPrivate {
  constructor() {
    this._toppings = [];
  }
  addTopping(topping) {
    this._toppings.push(topping);
  }
}

let pizzaPrivate = new PizzaPrivate();

pizzaPrivate.addTopping('cheese');
pizzaPrivate.addTopping('mushrooms');

// It is still possible to access the array even if we only publicly display the method. There's nothing stopping anyone from using a regular .push('cheese') if they know the name of the array. 
// Javascript does not have a way to make properties private. There is however a convention to let other programmers know that they should not access something directly. This is done by adding a _ at the start of a property name.

pizzaPrivate._toppings.push('sneakycheese');

// If you do something like shown on above line, you're on thin ice.


// ----- Single Responsibility Principle -----

// Manage the state of a task
class Task {
  complete() {
    //Mark this task as complete
  }
  sendNotification() {
    // Send a notification to the user that their task is complete
  }
  saveToDatabase() {
    // Save this task to the database
  }
}

let task = new Task();
task.saveToDatabase();
task.complete();
task.sendNotification();
task.saveToDatabase();

// This Task class looks simple at first glance. But it's responsible for three different things. It fails the single responsibility principle due to this: 
// If the way a task's state is managed changes, like using a string instead of a boolean to mark a task as done, then the first method has to change.
// If our in-app notification system changes, from browser notifications to email notifications, then the second method has to change.
// If we need to change how it's persisted in the database, then the third method has to change.
// Each method also has access to the entire internal state of the object. So changing how complete() works could break saveToDatabase().

// A possible solution:
class SingleTask {
  complete() {
    // mark this task as complete
  }
}

class NotificationManager {
  sendNotification(task) {
    // send a notification to the user that their task is complete
  }
}

class DatabaseManager {
  saveToDatabase(task) {
    // save this task to the database
  }
}

let singleTask = new SingleTask();
DatabaseManager.saveToDatabase();
singleTask.complete();
NotificationManager.sendNotification();
DatabaseManager.saveToDatabase();

// By arranging it this way, we can change methods in the different classes without it requiring rewriting other methods/classes. For example, You could change the database used from PSQL to MongoDB, and it should not affect how the other methods/classes work.


// ----- Inheritance -----

class Flower 
