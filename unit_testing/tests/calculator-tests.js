describe('Calculator', function () {
    var calculator;

    beforeEach(function () {
        calculator = new Calculator();
    });

    describe('Add', function () {
        it("should return the sum of two operands", function () {
            expect(calculator.add(1, 1)).to.be(2);
        });
    });
    describe('Subtract', function () {
        it("should return the difference of two operands", function () {
            expect(calculator.subtract(4, 2)).to.be(2);
        });
    });
});
