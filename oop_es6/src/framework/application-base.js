import {TitleBar} from '../ui/title-bar.js';

export class ApplicationBase {
    constructor(title) {
        this.title = title;
        this.titleBar = new TitleBar(this.title);
        this.routeMap = {};
        this.defaultRoute = null;
    }

    show(element) {
        this.titleBar.appendToElement(element);

        if (this.defaultRoute) {
            this.activateRoute(this.defaultRoute);
        }
    }

    activateRoute(route) {
        let content = this.titleBar.element.find('.page-content');
        content.empty();

        this.routeMap[route].appendToElement(content);
    }

    addRoute(id, pageObject, defaultRoute = false) {
        this.titleBar.addLink(id, '');
        this.routeMap[id] = pageObject;
    }
}
