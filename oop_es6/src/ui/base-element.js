import $ from 'jquery';

export class BaseElement {
    constructor() {
        this.element = null; // jquery object
    }

    appendToElement(el) {
        this.createElement();
        el.append(this.element);
        this._enableJS();
    }

    createElement() {
        let s = this.getElementString();
        this.element = $(s);
    }

    getElementString() {
        throw 'Please override getElementString() in BasrElement'
    }

    _enableJS() {
        componentHandler.upgradeElement(this.element[0]);
    }
}
