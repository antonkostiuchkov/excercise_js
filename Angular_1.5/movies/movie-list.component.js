(function (module) {
    "use strict";

    var fetchMovies = function ($http) {
        return $http.get("/movies.json")
                    .then(function (response) {
                        return response.data;
                    });
    }

    var controller = function ($http) {
        var movieList = this;
        movieList.movies = [];

        movieList.$onInit = function () {
            fetchMovies($http).then(function(movies) {
                movieList.movies = movies;
            });
        };

        movieList.upRating = function (movie) {
            if (movie.rating < 5 ) {
                movie.rating += 1;
            }
        };
        movieList.downRating = function (movie) {
            if (movie.rating > 1 ) {
                movie.rating -= 1;
            }
        };
    }

    module.component("movieList", {
        templateUrl: "/movies/movie-list.component.html",
        controllerAs: "movieList",
        controller: ["$http", controller]
    });

}(angular.module("movies")));
