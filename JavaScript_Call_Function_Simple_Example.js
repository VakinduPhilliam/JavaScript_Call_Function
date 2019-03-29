/* Using call to chain constructors for an object. */
/* You can use call to chain constructors for an object, similar to Java. */
/* In the following example, the constructor for the Product object is defined with two parameters, name and price. */
/* Two other functions Food and Toy invoke Product passing this and name and price. */
/* Product initializes the properties name and price, both specialized functions define the category. */

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

var cheese = new Food('Matooke', 5);
var fun = new Toy('Nambi', 40);

