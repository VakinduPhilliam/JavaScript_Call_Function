/* Using call to invoke a function and without specifying the first argument. */
/* In the example below, we invoke the display function without passing the first argument. */ 
/* If the first argument is not passed, the value of this is bound to the global object. */

var sData = 'Wisen';

function display() {

  console.log('sData value is %s ', this.sData);

}

// sData value is Wisen

display.call();  

