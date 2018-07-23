// 5 Prototype inheritance

const Vehicle = function (color, wheelCount) {
    this.color = color;
    this.wheelCount = wheelCount;
};

Vehicle.prototype = {
    getColor: function () {
        return this.color;
    },

    getWheelCount: function () {
        return this.wheelCount;
    }
};

const Car = function (color) {
    Vehicle.call(this, color, 4);
};

Car.prototype = Object.assign({}, Vehicle.prototype);
Car.prototype.constructor = 'Car';

const car = new Car('red');

console.log(car instanceof Car);