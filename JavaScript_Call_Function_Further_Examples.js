/* In JavaScript all functions are object methods. */
/* If a function is not a method of a JavaScript object, it is a function of the global object. */
/* With the call() method, you can write a method that can be used on different objects. */

//Example 1

var person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person1 = {
  firstName:"Simon",
  lastName: "Peter",
}
var person2 = {
  firstName:"Ben",
  lastName: "Carson",
}

person.fullName.call(person1);  // Will return "John Doe"


//Example 2


var person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Snow",
}
var person2 = {
  firstName:"Atiku",
  lastName: "Musa",
}

person.fullName.call(person2);  // Will return "Mary Doe"


//Example 3

var person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var person1 = {
  firstName:"Billy",
  lastName: "Jeans",
}

person.fullName.call(person1, "Oslo", "Norway");

