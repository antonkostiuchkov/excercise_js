describe('PieController', function() {
    var $rootScope,
        $scope,
        controller;

    beforeEach(function() {
        module('pie');

        inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')('PieController', {$scope: $scope});
        });
    });

    describe('Action Handlers', function() {
        describe('eatSlice', function() {
            it('should decrement number of slices', function() {
                expect($scope.slices).toEqual(8);
                $scope.eatSlice();
                expect($scope.slices).toEqual(7);
            });

            it('should do nothing when slices is 0', function() {
                $scope.slices = 0;
                $scope.eatSlice();
                expect($scope.slices).toEqual(0);
            });
        });

        describe('requestFlavor', function() {
            it('should set $scope.lastRequestedFlavor to the argument passed in', function() {
                controller.requestFlavor('Cherry');
                expect($scope.lastRequestedFlavor).toEqual('Cherry');
            });
        });
    });


    describe('Initialization', function() {
        it('should instantiate slices to 8', function() {
            expect($scope.slices).toEqual(8);
        });

        it('should instantiate $scope.lastRequestedFlavor', function() {
            expect($scope.lastRequestedFlavor).toBeUndefined();
        });
    });



});