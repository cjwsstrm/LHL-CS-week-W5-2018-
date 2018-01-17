class Pizza {
  
  constructor(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = ["cheese"];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + this.toppings.length * toppingPrice;
  }

  set size(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this._size = size;
    }
  }

  get size() {
    return this._size
  }
}
  
let pizza = new Pizza();

console.log(`Pizza Price: ${pizza.price}`);      // instead of getPrice()
pizza.size = 's'; // instead of setSize(size)
console.log(pizza.size);
