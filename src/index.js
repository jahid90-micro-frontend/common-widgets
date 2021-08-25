const { About } = require('./About');
!window.customElements.get('mf-about') && window.customElements.define('mf-about', About);

const { Footer } = require('./Footer');
!window.customElements.get('mf-footer') && window.customElements.define('mf-footer', Footer);

const { Home } = require('./Home');
!window.customElements.get('mf-home') && window.customElements.define('mf-home', Home);

const { Nav } = require('./Nav');
!window.customElements.get('mf-nav') && window.customElements.define('mf-nav', Nav);

const { NotFound } = require('./NotFound');
!window.customElements.get('mf-not-found') && window.customElements.define('mf-not-found', NotFound);
