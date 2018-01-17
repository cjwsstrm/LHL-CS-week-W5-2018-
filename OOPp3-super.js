class Person {
  constructor(name, quirkyfact) {
    this.name = name;
    this.quirkyfact = quirkyfact;
  }

  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyfact}.`;
  }
}

class Mentor extends Person {
  bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
  }
}

const bob = new Mentor('Bob Ross', 'I like mountains way too much');
console.log(bob.bio());

class Student extends Person {
  bio() {
    return `I'm a student at Lighthouse Labs (aka Labber). ${super.bio()}`;
  }
}

const cj = new Student('CJ', 'When I am drunk, I like to run places instead of walk. I also tend get giggly while doing so'); 

console.log(cj.bio());