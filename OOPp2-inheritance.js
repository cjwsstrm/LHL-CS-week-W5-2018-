class Person {
  constructor(name, quirkyfact) {
    this.name = name;
    this.quirkyfact = quirkyfact;
  }

  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyfact}`;
  }
}

class Student extends Person {
  
  enroll(cohort) {
    this.cohort = cohort;
  }
}

class Mentor extends Person {
  
  goOnShift() {
    this.onShift = true;
  }

  goOffShift() {
    this.onShift = false;
  }
}

let cj = new Student('CJ', 'On my first day on a construction site, I forgot how to use a crowbar to pull out a nail');

cj.enroll('web-van-04sep2017');

console.log(`CJ is a student and here's his info: ${cj}`);

let joelexander = new Mentor('Joel', 'I like puns');

joelexander.goOnShift();

console.log(`Joel is a mentor and here's his info and current shift status: ${joelexander}`);