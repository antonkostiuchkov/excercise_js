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



// Creational
// use to create new objects with their own object scope
// Binds 'this' to the new object scope
// Returns 'this'
// 1) Constructor pattern

var ObjectName = function(param1, param2){
    this.param1 = param1;
    this.param2 = param2;
    this.toString
};

// 2) Module pattern

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