// var type = 'coke';
// var drink;

// switch(type) {
//     case 'coke':
//       drink = 'Coke';
//       break;
//     case 'pepsi':
//       drink = 'Pepsi';
//       break;
//     default:
//       drink = 'Unknown drink!';
// }

// console.log(drink); // 'Coke'

////////////////////////
//// Using object
/////////////////////////

// function getDrink (drink) {
//     var drinks = {
//         'coke': 'Coke',
//         'pepsi': 'Pepsi',
//         'lemonade': 'Lemonade',
//         'default': 'Default item'
//     }

//     return 'The drink I chose was ' + (drinks[drink.type] || drinks['default']);
// }

// var drink = getDrink({type: 'coke'})
// console.log('', drink);


////////////////////////////

function getDrink (drink) {
    var fn;
    var drinks = {
        coke: function () {
            return 'Coke'
        },
        pepsi: function  () {
            return 'Pepsi'
        },
        lemonade: function  () {
            return 'Lemonade'
        },
        default: function () {
            return 'Water'
        }
    }

    return (drinks[drink.type] || drinks.default )()
}

var drink = getDrink({type: 'dr pepper'})

console.log('', drink);