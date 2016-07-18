describe('DessertManager', function() {
    var values, factory;

    beforeEach(function() {
        module('desserts');

        inject(function ($injector) {
            values = $injector.get('DessertValues');
            factory = $injector.get('DessertManager');
        });
    });

    describe('DessertValues', function() {
        it('should instantiate with 3 pie flavors', function() {
            expect(values.pies).toEqual([
                {flavor: 'Cherry', score: 6},
                {flavor: 'Apple', score: 7},
                {flavor: 'Peach', score: 10}
            ]);
        });
    });

    describe('DessertManager', function() {
        describe('pieFlavors', function() {
            it('should return 3 pie flavor strings', function() {
                var flavors = factory.pieFlavors();
                expect(flavors.length).toEqual(3);
            });
        });
    });

});