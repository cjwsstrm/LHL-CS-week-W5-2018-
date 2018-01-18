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

// Public vs Private. It is still possible to access the array even if we only publicly display the method. There's nothing stopping anyone from using a regular .push('cheese') if they know the name of the array. 
// Javascript does not have a way to make properties private. There is however a convention to let other programmers know that they should not access something directly. This is done by adding a _ at the start of a property name.

pizzaPrivate._toppings.push('sneakycheese');

// If you do something like shown on above line, you're on thin ice.