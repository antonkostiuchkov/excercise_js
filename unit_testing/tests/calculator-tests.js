// describe('Calculator', function () {
//     var calculator;
//
//     before(function () {
//         console.log("before");
//         calculator = new Calculator;
//     });
//
//     beforeEach(function () {
//         console.log("before each");
//     });
//
//     describe('Add', function () {
//         it("should return the sum of two operands", function () {
//             expect(calculator.add(1, 1)).to.be(2);
//         });
//
//         it("should return NaN if passed 0 arguments");
//     });
//     describe('Subtract', function () {
//         it("should return the difference of two operands", function () {
//             expect(calculator.subtract(4, 2)).to.be(2);
//         });
//     });
//
//     afterEach(function () {
//         console.log("after each")
//     });
//
//     after(function () {
//         console.log("after");
//     });
// });

///////////////////////////////////////////////

describe("Ping", function () {
    it("should update in 500ms", function () {
        poll.ping(function (message) {
            expect(message).to.be("Pong!");
        });
    });
});
