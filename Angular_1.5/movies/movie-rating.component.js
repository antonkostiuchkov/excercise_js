(function (module) {
    "use strict";

    var controller = function (){
        var movieRating = this;

        movieRating.$onInit = function () {
            movieRating.entries = new Array(movieRating.value);
        };

        movieRating.$onChanges = function () {
            movieRating.entries = new Array(movieRating.value);
        };
    };

    module.component("movieRating", {
        templateUrl: "/movies/movie-rating.component.html",
        bindings: {
            value: "<" // this sign tell ng that the value will be given from the outside world
        },
        controllerAs: "movieRating",
        controller: controller
    });

}(angular.module("movies")));
