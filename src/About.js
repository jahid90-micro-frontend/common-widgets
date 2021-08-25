export class About extends HTMLElement {

    connectedCallback() {

        console.log('mf-about connected');

        this.render();

    }

    disconnectedCallback() {

        console.log('mf-about disconnected');

    }

    render() {

        const template = require('./views/about.pug');
        this.innerHTML = template({});

    }

}

!window.customElements.get('mf-about') && window.customElements.define('mf-about', About);
