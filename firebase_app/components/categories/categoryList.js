(function(app){
    'use strict';

    var categoryList = {
        templateUrl: '/components/categories/categoryList.html'
    };

    app.component('categoryList', categoryList);

})(angular.module('angularFirebase'));