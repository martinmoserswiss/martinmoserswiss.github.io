portfolioApp.factory('calculator', function() {
    return {

        addAtoB: function (a, b) {
            return a+b;
        },

        multiplyAwithB: function (a, b) {
            return a*b;
        }
    };
});