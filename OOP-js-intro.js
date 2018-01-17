
// Creating a "dog" object with a few properties. If the property is a function, it is usually called a "method" instead.
const dog = {
    sound: "woof", // Property
    breed: "shih tzu", // Property
    speak: function() { // Method
      console.log(`${this.dogBreed} says ${this.dogSound}`);
    }
  };

// Using "this" to refer to the object that a method is called on.
// Whenever your method is accessing a property or another method on the same object, use this.
const dog = {
    sound: "woof",
    speak: function() {
      console.log(this.sound);
    },
    teachMeSomething: function() {
      if (dog === this) {
        console.log('dog === this');
      }
      this.speak();
    }
  };
  
  dog.teachMeSomething();

