// Go to jsbin.com and paste the following code

//////////////////////////////
// Let, const, block scoping//
//////////////////////////////

// Use let to declare variables
// Use let instead of var
// By using let we make sure the variable declaration takes place before it's used

// let  prodId = 12;
// console.log(prodId);


// let prodId = 12;
// {
//   let prodId = 2000;
// }
// console.log(prodId);

/////////////

// JS5 problem

// let updateFunctions = [];
// for (var i = 0; i < 2; i++){
//   var fun = function(){
//     return i;
//   };
//   updateFunctions.push(fun)
// }
// console.log(updateFunctions[0]());

// JS6

// let updateFunctions = [];
// for (let i = 0; i < 2; i++){
//   var fun = function(){
//     return i;
//   };
//   updateFunctions.push(fun)
// }
// console.log(updateFunctions[0]());

/////////////////

// const
// const - vars that are unable to change

// const ID = 100;
// console.log(ID);

// const ID = 100;
// if(ID > 0){
//   const ID = 10;
// }
// console.log(ID);



/////////////////////
// Fat arrow functions. Purpose - to handle 'this' key word
//////////////////////

// Fat arrow functions
// this input results in this output
// var getPrice = () => 5.99;
// console.log(typeof(getPrice));
// console.log(getPrice());

// var getPrice = count => count * 4.00;
// console.log(getPrice(2));


// var getPrice = (count, tax) => count * 4.00 * (tax + 1);
// console.log(getPrice(2, 1));

// var getPrice = (count, tax) => {
//   var price = count * 4;
//   price *= (tax + 1);
//   return price;
// };
// console.log(getPrice(2, 1));


// 'this' is not going to set to the element that receives click function but to the code we're in.

// document.addEventListener('click', function(){
//   console.log(this);
// });
// document.addEventListener('click', () => console.log(this));


// var invoice = {
//   number: 123,
//   process: function(){
//     console.log(this);
//   }
// };
// invoice.process(); // we get our object

// var invoice = {
//   number: 123,
//   process: () => console.log(this)
// };
// invoice.process(); // we get our context

// var invoice = {
//   number: 123,
//   process: function() {
//     return () => console.log(this.number);
//   }
// };
// invoice.process()();


/////////// ES5
// var invoice = {
//   number: 123,
//   process: function() {
//     return function(){console.log(this.number);}
//   }
// };
// var newInvoice = {
//   number: 456
// }
// invoice.process().bind(newInvoice)();

//////////// ES6
// You can't bind to arrow function
// var invoice = {
//   number: 123,
//   process: function() {
//     return () => console.log(this.number);
//   }
// };
// var newInvoice = {
//   number: 456
// }
// invoice.process().bind(newInvoice)();

// The same goes for call and apply

/////////// ES5
// var invoice = {
//   number: 123,
//   process: function() {
//     return function(){console.log(this.number);}
//   }
// };
// var newInvoice = {
//   number: 456
// }
// invoice.process().call(newInvoice);

//////////// ES6
// You can't bind to arrow function
// var invoice = {
//   number: 123,
//   process: function() {
//     return () => console.log(this.number);
//   }
// };
// var newInvoice = {
//   number: 456
// }
// invoice.process().call(newInvoice);

// Declaring function with fat arrow we do not have access to prototype.

// Default function params
// var getProd = function(prodId = 100){
//   console.log(prodId);
// };
// getProd();

// var getProd = function(prodId = 100, type = 'software'){
//   console.log(prodId + ' ' + type);
// };
// getProd(undefined, 'hardware');



/////////////////////
// Rest and spread //
/////////////////////

// Rest - gather parameters and put them all in single array
// Spread - spread out elements of an array

// var showCat = function(prodId, ...categories){
//   console.log(categories instanceof Array);
//   console.log(categories);
// }
// showCat(123, 'search', 'advertising');

// Spread
// var prices = [12, 20, 18];
// var maxPrice = Math.max(...prices);
// console.log(maxPrice);

// var prices = [12, 20, 18];
// var newPriceArray = [...prices];
// console.log(newPriceArray);



