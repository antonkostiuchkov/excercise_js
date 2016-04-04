var names = ['Anton', 'Gosia', 'Alex'];
var author = {firstName: 'Anton', city: 'Kiev'};

// _.each(names, function(element, index, list){
//     console.log('element: ' + element);
//     console.log('index: ' + index);
//     console.log('list: ' + list);
//     console.log('list length: ' + list.length);
// });

// _.each(author, function (value, key) {
//     console.log('Value: ' + value);
//     console.log('key: ' + key);
// });

///////
// map
///////
var info = function (name) {
    return name + ' was mapped';
};
var log = function (string) {
    console.log(string);
};

var m = _.map(names, info);

_.each(m, log);