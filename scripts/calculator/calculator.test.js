describe('Calculator module:', function () {
    var calculator;

    // load the application module
    beforeEach(module('portfolioApp'));

    // get a reference to the service
    beforeEach(inject(function (_calculator_) {
        calculator = _calculator_;
    }));

    describe('The Addition', function() {

        it('should proof the sum of two numbers:', function () {
            var c = calculator.addAtoB(12,41);
            expect(c).toEqual(53);
        });
        it('should proof the sum of a negative and a positive number:', function () {
            var c = calculator.addAtoB(-12,41);
            expect(c).toEqual(29);
        });
        it('should proof the sum of two negative numbers:', function () {
            var c = calculator.addAtoB(-12,-41);
            expect(c).toEqual(-53);
        });
        it('should proof the sum of a floating point and a whole number:', function () {
            var c = calculator.addAtoB(12.686,41);
            expect(c).toEqual(53.686);
        });
        it('should proof the sum of two floating point numbers:', function () {
            var c = calculator.addAtoB(12.686,43.6666);
            expect(c).toEqual(56.3526);
        });
    });

    describe('The multiplication', function() {

        it('should proof the product of two numbers:', function () {
            var c = calculator.multiplyAwithB(5,3);
            expect(c).toEqual(15);
        });

        it('should proof the product of a negative and a positive number:', function () {
            var c = calculator.multiplyAwithB(5,-3);
            expect(c).toEqual(-15);
        });

        it('should proof the product of two negative numbers:', function () {
            var c = calculator.multiplyAwithB(-5,-3);
            expect(c).toEqual(15);
        });

        it('should proof the product of a floating point and a whole number:', function () {
            var c = calculator.multiplyAwithB(5.685,3);
            expect(c).toEqual(17.055);
        });

        it('should proof the product of two floating point numbers:', function () {
            var c = calculator.multiplyAwithB(5.685,3.6846);
            expect(c).toEqual(20.946951);
        });
    });
});
