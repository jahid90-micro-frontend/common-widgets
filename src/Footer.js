export class Footer extends HTMLElement {

    connectedCallback() {

        console.log('mf-footer connected');

        this.render();

    }

    disconnectedCallback() {

        console.log('mf-footer disconnected');

    }

    render() {

        const template = require('./views/footer.pug');
        this.innerHTML = template({});

    }

}

!window.customElements.get('mf-footer') && window.customElements.define('mf-footer', Footer);
