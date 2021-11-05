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
        this.header.addChildren(new Element("Logo", {css:'.header__logo'}));
        this.menuItems = new Elements("Menu Items", {css:'.top-navigation__item-link'});
        this.footer = new Element("Footer", {css:'.footer__holder'});
        this.footer.addChildren(new Element("Our brands", {css:'.footer__brands-list-wrapper'}));
    }

    get logo() {
        return this.header.get("Logo").locator().css
    }
    
    retrieveHeader () {
        return this.header.name;
    };

    retrieveMenuItems () {
        return this.menuItems.locator;
    }

    get footerBrands () {
        return this.footer.get("Our brands").locator().css
    };

}

module.exports = HomePage;