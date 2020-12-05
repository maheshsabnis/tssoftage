var MathClass = /** @class */ (function () {
    function MathClass(x, y) {
        this.x = x;
        this.y = y;
        this.x = x;
        this.y = y;
    }
    MathClass.prototype.add = function () {
        return this.x + this.y;
    };
    // accept only one single array object
    // mutable object,having a fix length for array for each method call
    MathClass.prototype.addValuesArray = function (values) {
        var sum = 0;
        if (values.length > 0) {
            values.forEach(function (v, i) {
                return sum += v;
            });
        }
        return sum;
    };
    // method with variable number of parameters
    // ...values:number[] , the rest parameter
    // an immutable object which will be having 
    // no fixed size
    // ...valaues equivalent to 
    // object.assign([], values);
    // each time new values will be created based on old values
    // called as Object Mutation concept of ES 6
    MathClass.prototype.addValues = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        var sum = 0;
        if (values.length > 0) {
            values.forEach(function (v, i) {
                return sum += v;
            });
        }
        return sum;
    };
    MathClass.prototype.subst = function () {
        return this.x - this.y;
    };
    return MathClass;
}());
var m1 = new MathClass(10, 20);
console.log("Add = " + m1.add());
console.log("Sub = " + m1.subst());
console.log("Add 2 values = " + m1.addValuesArray([2, 3]));
console.log("Add 3 values = " + m1.addValuesArray([2, 3, 4]));
console.log("Add 4 values = " + m1.addValuesArray([2, 3, 4, 5]));
console.log('Using rest parameters');
console.log("Add 2 values = " + m1.addValues(2, 3));
console.log("Add 3 values = " + m1.addValues(2, 3, 4));
console.log("Add 4 values = " + m1.addValues(2, 3, 4, 5));
