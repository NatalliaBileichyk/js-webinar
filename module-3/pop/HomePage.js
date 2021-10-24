/**
 * Create HomePage class representing the EPAM.com home page.
 * Add main widgets and element of the page and write tests
 * for it (test/pop/HomePage.spec.js).
 */
const Layout = require('./Layout');
const Element = require('./Element');
const Elements = require('./Elements');

class HomePage extends Layout {
    constructor(name, url, locator) {
        super(name, url, locator);
        
        this.header = new Element('Header', {css:'header'});
        this.logo = new Element('Logo', {css:'.header__logo'});
        this.menuItems = new Elements("Menu Items", {css:'.top-navigation__item-link'});
        this.footerElements = new Elements("Footer", {css:'.footer__holder'});
    }

    retrieveLogo() {
        return this.logo.name; 
    }

    retrieveHeader () {
        return this.header.name;
    };

    retrieveMenuItems () {
        return this.menuItems.locator;
    }

    retrieveFooter () {
        return this.footerElements.locator;
    };
}

module.exports = HomePage;