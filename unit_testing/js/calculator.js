// var Calculator = (function () {
//     function Calculator() {};
//
//     Calculator.prototype.add = function (operand1, operand2) {
//         return operand1 + operand2;
//     };
//
//     Calculator.prototype.subtract = function (operand1, operand2) {
//         return operand1 - operand2;
//     };
//
//     return Calculator;
// })();


//////////////////////////////

var poll = {
    ping: function (ping) {
        setTimeout(function () {
            ping("Pong!");
        }, 500);
    }
};

var view = {
    $el: $('#main'),
    show: function () {
        return this.$el.fadeIn(250).promise();
    }
};

var getTemplate = function (path, callback) {
    return $.ajax({url: path});
};

function deferredRefresh() {
    return $.Deferred(function (dfd) {
        setTimeout(function () {
            dfd.resolve("Ping!")
        }, 500);
    }).promise();
}
