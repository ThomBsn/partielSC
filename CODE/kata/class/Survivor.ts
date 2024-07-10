import {Orientation} from "../enum/Orientation"
import {Movements} from "../enum/Movements"
class Survivor {
    private _x: double;
    private _y: double;
    private _orientation: Orientation;
    private _health: int;

    constructor(x: int, y: int, orientation: Orientation, health: int) {
        this._x = x;
        this._y = y;
        this._orientation = orientation;
        this._health = health;
    }


    get x(): double {
        return this._x;
    }

    set x(value: double) {
        this._x = value;
    }

    get y(): double {
        return this._y;
    }

    set y(value: double) {
        this._y = value;
    }

    get orientation(): Orientation {
        return this._orientation;
    }
    set orientation(value: Orientation) {
        this._orientation = value;
    }

    get health(): int {
        return this._health;
    }

    set health(value: int) {
        this._health = value;
    }

    public explore(action){
        switch(action){

        }
    }
}

