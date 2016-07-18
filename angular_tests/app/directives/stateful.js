angular
    .module('directives', [])
    .directive('nsStateful', nsStateful);


function nsStateful() {
    return {
        restrict: 'A',
        scope: false,
        link: link
    };

    function link(scope, element, attrs) {
        if (!attrs.nsStateful) {
            throw "You must provide a class name in order to use nsStateful directive.";
        }

        element.on('click', function (e) {
            scope.$apply(function () {
                if (!element.hasClass(attrs.nsStateful)) {
                    element.addClass(attrs.nsStateful);
                } else {
                    element.removeClass(attrs.nsStateful);
                }
            });
        });
    }
}