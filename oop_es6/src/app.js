class Drone {
    constructor(id, name) {
        this._id = id;
        this.name = name;
    }

    fly() {
        console.log("Drone " + this.id + " is flying");

    }

    static getCompany() {
        console.log("in getCompany");

    }

    get id() {
        return this._id
    }

    set id(value) {
        this._id = value 
    }
}

let drone = new Drone(123, 'Flyer');
let drone2 = new Drone(321, 'Twirl');

drone.fly();
console.log(drone.id + ': ' + drone.name);
