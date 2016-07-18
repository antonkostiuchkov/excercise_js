angular
    .module('desserts', [])
    .value('DessertValues', {
        pies: [
            {flavor: 'Cherry', score: 6},
            {flavor: 'Apple', score: 7},
            {flavor: 'Peach', score: 10}
        ]
    });


angular
    .module('desserts')
    .factory('DessertManager', DessertManager);

DessertManager.$inject = ['DessertValues'];
function DessertManager(dessertValues) {
    return {
        pieFlavors: pieFlavors
    };

    function pieFlavors () {
        return dessertValues.pies.map(function (pie) {
            return pie.flavor;
        });
    }
}