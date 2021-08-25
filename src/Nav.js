export class Nav extends HTMLElement {

    connectedCallback() {

        console.log('mf-nav connected');

        this.render();

    }

    disconnectCallback() {

        connsole.log('mf-nav disconnected');

    }

    render() {

        const template = require('./views/nav.pug');
        this.innerHTML = template({});

    }

}

!window.customElements.get('mf-nav') && window.customElements.define('mf-nav', Nav);
