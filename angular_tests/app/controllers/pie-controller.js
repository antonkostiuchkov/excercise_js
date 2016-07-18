angular
    .module('pie', [])
    .controller('PieController', PieController);



PieController.$inject = ['$scope'];
function PieController($scope) {

    $scope.eatSlice = function () {
        if ($scope.slices) {
            $scope.slices--;
        }

    };

    this.requestFlavor = function (flavor) {
        $scope.lastRequestedFlavor = flavor;
    };

    $scope.slices = 8;
    $scope.lastReuestedFlavor;
}