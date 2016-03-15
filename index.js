// Generic code bits

/////////////////
//Call and apply
/////////////////

// var updateZipCode = function () {
//     console.log(this);
// };

// updateZipCode.call({});

//////////

// Passing the object that becomes 'this' in the function
// var updateZipCode = function () {
//     console.log(this);
// };

// updateZipCode.call({zip: 5186});

/////////

// var updateZipCode = function (newZip, country) {
//     console.log(newZip + ' ' + country);
// };

// var zipCode = { zip: 987 };

// updateZipCode(123, 'us');
// updateZipCode.apply(zipCode, [123, 'us']);
// updateZipCode.apply([123, 'us']);


//////////
// Closure

// var salaryUpdater = function (salary) {
//     var currentSalary = salary;
//     var generator = function () {
//         currentSalary += 10000;
//         return currentSalary;
//     };
//     return generator;
// };

// var updateSalary = salaryUpdater(50000);
// updateSalary();
// console.log(updateSalary());


////////////////////////////////
/////////////////////////////////
// Do in browser/////////////////
/////////////////////////////////
///////////////////////////////

// window.screen;
// window .screenTop;
// window.innerWidth;

// window.open('website url', '_blank');

// console.log(new Date().getSeconds());
// setTimeout(function(){
//     console.log(new Date().getSeconds());
// }, 1000);

// console.log(new Date().getSeconds());
// setInterval(function(){
//     console.log(new Date().getSeconds());
// }, 1000);


/////////////////
// Location object

// console.log(location.href);

// Redirects to the webpage
// location.assign('http://www.google.com');


