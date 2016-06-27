import {Car} from '../classes/car.js';
import {Drone} from '../classes/drone.js';
import {DataError} from './data-error.js';

export class FleetDataService {

    constructor() {
        this.cars = [];
        this.drones = [];
        this.errors = [];
    }

    loadData(fleet) {

        for (let data of fleet) {
            switch (data.type) {
                case 'car':
                    if (this._validateCarData(data)) {
                        let car = this._loadCar(data);
                        this.cars.push(car);
                    } else {
                        let e = new DataError('Invalid car data', data);
                        this.errors.push(e);
                    }
                    break;
                case 'drone':
                    if (this._validateDroneData(data)) {
                        let drone = this._loadDrone(data);
                        this.drones.push(drone);
                    } else {
                        this.errors.push(new DataError('Invalid drone data', data));
                    }
                    break;
                default:
                    let e = new DataError('Invalid vehicle type', data);
                    this.errors.push(e);
                    break;
            }
        }
    }

    _loadCar(car) {
        let c = new Car(car.license, car.model, car.latLong);
        c.miles = car.miles;
        c.make = car.make;
        return c;
    }

    _loadDrone(drone) {
        let d = new Drone(drone.license, drone.model, drone.latLong);
        d.airTimeHours = drone.airTimeHours;
        d.base = drone.base;
        return d;
    }

    _validateCarData(car) {
        let requiredProps = 'license model latLong miles make'.split(' ');
        let hasErrors = false;
        let milesNum = Number.parseFloat(car.miles);

        for (let field of requiredProps) {
            if (!car[field]) {
                this.errors.push(new DataError(`Invalid field ${field}`, car));
                hasErrors = true;
            }
        }

        if (Number.isNaN(milesNum)) {
            this.errors.push(new DataError('Invalid mileage', car));
            hasErrors = true;
        }

        return !hasErrors;
    }

    _validateDroneData(drone) {
        let requiredProps = 'license model latLong airTimeHours base'.split(' ');
        let hasErrors = false;
        let airTimeHoursNum = Number.parseFloat(drone.airTimeHours);

        for (let field of requiredProps) {
            if (!drone[field]) {
                this.errors.push(new DataError(`Invalid field: ${field}`, drone));
                hasErrors = true;
            }
        }

        if (Number.isNaN(airTimeHoursNum)) {
            this.errors.push(new DataError('Invalid air time hours', drone));
            hasErrors = true;
        }

        return !hasErrors;
    }


    getCarByLicense(license) {
        return this.cars.find(function (car) {
            return car.license === license;
        });
    }

    getCarsSortedByLicense() {
        return this.cars.sort(function (car1, car2) {
            if (car1.license < car2.license) {
                return -1;
            }
            if (car1.license > car2.license) {
                return 1
            }
            return 0;
        });
    }


    filterCarsByMake(filter) {
        return this.cars.filter(car => car.make.indexOf(filter) >= 0);
    }

}
