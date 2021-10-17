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
        
        this.newElementHeader = new Element('Header', {css:'header'});
        this.newElementLogo = new Element('Logo', {css:'.header__logo'});
        this.newElementMenuItems = new Elements("Menu Items", {css:'.top-navigation__item-link'});
        this.newElementFooter = new Elements("Footer", {css:'.footer__holder'});
    }

    getLogo () {
        return this.newElementLogo.name;
    };

    getHeader () {
        return this.newElementHeader.name;
    };

    getMenuItems () {
        return this.newElementMenuItems.locator;
    }

    getFooter () {
        return this.newElementFooter.locator;
    };
}

module.exports = HomePage;