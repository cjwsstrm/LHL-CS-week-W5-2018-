class Pizza {

	constructor(size, crust) {
		this.size = size;
		this.crust = crust;
		this.toppings = ["cheese"];
  }

	addTopping(topping) {
		this.toppings.push(topping);
	}

}

let pizza1 = new Pizza('small', 'thin');
pizza1.addTopping("tomatoes");
pizza1.addTopping("basil");
console.log(pizza1)

let pizza2 = new Pizza('medium', 'thick');
pizza2.addTopping("more cheese");
console.log(pizza2);

let pizza = new Pizza('large', 'thin');
console.log(pizza);