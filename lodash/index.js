// Loop for n times

// _.times(5, function () {
//     console.log('hello');
// });


//////////////////
//
// var ownerArr = [{
//     "owner": "Colin",
//     "pets": [{"name":"dog1"}, {"name": "dog2"}]
// }, {
//     "owner": "John",
//     "pets": [{"name":"dog3"}, {"name": "dog4"}]
// }];

// var result = _.map(ownerArr, 'pets[1].name')
// console.log('', result);





/////////////////////////
// Create an array of length 6 and populate them with unique values. The value must be prefix with "ball_".
// eg. [ball_0, ball_1, ball_2, ball_3, ball_4, ball_5]

// var res = _.times(6, _.partial(_.uniqueId, 'ball_'));
// console.log('', res);


////////////////////////
// Get a random number between 15 and 20.

// var x = _.random(15, 20);

// console.log('', x);
// _.random(20); // Return random number between 0 to 20
// _.random(15, 20, true); // Return random floating numbers between 15 and 20


///////////////////////
// Assignings objects

// var objA = {"name": "colin", "car": "suzuki"};
// var objB = {"name": "james", "age": 17};

// console.log(_.assign(objA, objB));

// var objA = {"name": "colin", "car": "suzuki"};
// var objB = {"name": "james", "age": 17};
// var objC = {"pet": "dog"};

// console.log(_.assign(objA, objB, objC));


/////////////////////
// Remove properties from object

// var objA = {"name": "colin", "car": "suzuki", "age": 17};
// // objA = _.omit(objA, ['car', 'age']);
// // or
// objA = _.omit(objA, 'car'); // {"name": "colin", "age": 17};
// console.log('', objA);



////////////////
// Select properties from another object to form new object
// var objA = {"name": "colin", "car": "suzuki", "age": 17};
// objB = {'pet': 'dog1'};

// var objC = _.pick(objA, ['car', 'age']);
// console.log('', objC);



///////////////
// Selecting a random item from a list
// var luckyDraw = ["Colin", "John", "James", "Lily", "Mary"];
// console.log('', _.sample(luckyDraw));
