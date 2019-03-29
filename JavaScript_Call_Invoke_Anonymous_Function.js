/* Using call to invoke an anonymous function. */
/* In this example, we create an anonymous function and use call to invoke it on every object in an array. */
/* The main purpose of the anonymous function here is to add a print function to every object. */ 
/* This enables it to print the right index of the object in the array. */
/* Passing the object as this value was not strictly necessary, but is done for explanatory purpose.*/

var animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' }
];

for (var i = 0; i < animals.length; i++) {
  (function(i) {
    this.print = function() {
      console.log('#' + i + ' ' + this.species
                  + ': ' + this.name);
    }
    this.print();
  }).call(animals[i], i);
}

