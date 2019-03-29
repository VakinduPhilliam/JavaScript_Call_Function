/* Using call to invoke a function and specifying the context for 'this'. */
/* In the example below, when we call greet, the value of this will be bound to object obj. */

function greet() {

  var reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');

  console.log(reply);

}

var obj = {

  animal: 'cats', sleepDuration: '12 and 16 hours'

};

// cats typically sleep between 12 and 16 hours

greet.call(obj);  

