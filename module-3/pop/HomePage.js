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
    }

    getLogo () {
        const newElementLogo = new Element('Logo', {css:'.header__logo'});
        return newElementLogo.name;
    };

    getHeader () {
        const newElementHeader = new Element('Header', {css:'header'});
        return newElementHeader.name;
    };

    getMenuItems () {
        const newElementMenuItems = new Elements("Menu Items", {css:'.top-navigation__item-link'});
        return newElementMenuItems.locator;
    }
}

module.exports = HomePage;