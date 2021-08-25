export class Home extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {

        console.log('mf-home connected');

        this.render();

    }

    disconnectedCallback() {

        console.log('mf-home disconnected');

    }

    render() {

        const template = require('./views/home.pug');
        this.innerHTML = template({});

    }

}

!window.customElements.get('mf-home') && window.customElements.define('mf-home', Home);
