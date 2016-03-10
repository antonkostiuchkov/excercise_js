// var task = {
//     title: 'Task Title',
//     descr: 'Task Description'
// };

// Object.defineProperty(task, 'toString', {
//     value: function () {
//         return this.title + ' ' + this.descr;
//     },
//     writable: false,
//     enumerable: false,
//     configurable: false
// });


// console.log(task.toString());
// console.log(Object.keys(task));

// var urgentTask = Object.create(task);
// Object.defineProperty(urgentTask, 'toString', {
//     value: function () {
//         return this.title + ' is urgent';
//     },
//     writable: false,
//     enumerable: false,
//     configurable: false
// });
// console.log(urgentTask.toString());



//////////////// Creational
// use to create new objects with their own object scope
// Binds 'this' to the new object scope
// Returns 'this'



//////////////////////////
// 1) Constructor pattern
//////////////////////////
// For creating several copies

// function ObjectName (param1, param2){
//     this.param1 = param1;
//     this.param2 = param2;
//     this.toString = function () {
//       return this.param1 + ' ' + this.param2;
//     };
// }
// var x = new ObjectName(1,2);
// console.log(x.toString());

// var Task = function (name) {
//   this.name = name;
//   this.completed = false;

//   this.complete = function () {
//     console.log('Completing task ' + this.name);
//     this.completed = true;
//   };

//   this.save = function () {
//     console.log('Saving task ' + this.name);
//   };
// };

// Creating a copy of Task object

// var goSwim = new Task('Go to swimming pool');
// console.log(goSwim.completed);
// console.log(goSwim.name);
// console.log(goSwim.complete());
// console.log(goSwim.completed);
// console.log(goSwim.save());


////////////////////////////////////////
// function toString is being recreated every time we copy Task object
// Prototypes
// var Task = function (name) {
//   this.name = name;
//   this.completed = false;
// };

// Task.prototype.complete = function() {
//   console.log('Completing task ' + this.name);
//   this.completed = true;
// };
// Task.prototype.save = function() {
//   console.log('Saving task ' + this.name);
// };

// var task1 = new Task('run');
// var task2 = new Task('read');
// console.log(task1.completed);
// task1.complete();
// task1.save();
// console.log(task1.completed);



//////////////////////
// 2) Module pattern
//////////////////////
// When you need only one of those


var Module = function() {
    var privateVar = 'I am private';

    return {
        method: function () {
            console.log('method');
        },
        nextMethod: function () {
            console.log('nextMethod');
        }
    };
};

var myModule = Module();
myModule.nextMethod();



// 3) Factory ptrn

// 4) Singleton ptrn



// Structural
// 1) Decorator

// 2) Facade

// 3) Flyweight



// Behavioral
// 1) Command

// 2) Mediator

// 3) Observer