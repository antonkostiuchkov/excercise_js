import {BaseElement} from '../ui/base-element.js';
import {Image} from '../ui/image.js';
import {Button} from '../ui/button.js';
import {application} from '../app.js';

export class HomePage extends BaseElement {
    constructor() {
        super();
    }

    createElement() {
        super.createElement();

        let i = new Image('../../images/drone.jpg');
        i.appendToElement(this.element);

        let styleString = 'width: 300px; height: 80px;';
        let b = new Button('Self Driving Cars');
        b.setStyleString(styleString);
        b.appendToElement(this.element);

        b = new Button('Drones');
        b.setStyleString(styleString);
        b.appendToElement(this.element);

    }

    getElementString() {
        return '<div style="text-align: center;"></div>';
    }

}
