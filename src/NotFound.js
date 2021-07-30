export class NotFound extends HTMLElement {

    connectedCallback() {

        console.log('mf-not-found connected');

        this.render();

    }

    disconnectedCallback() {

        console.log('mf-not-found disconnected');

    }

    render() {

        const template = require('./views/not-found.pug');
        this.innerHTML = template({});

    }

}