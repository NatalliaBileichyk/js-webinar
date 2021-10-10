const Browser = require('../mock/Browser');
const ElementFinder = require('../mock/ElementFinder');
const HomePage = require('../../pop/HomePage');
const expect = require('chai').expect;

describe.only('HomePage Class', () => {
    beforeEach(() => {
        global.element = ElementFinder.element;
        global.browser = new Browser();
    });
    
    afterEach(() => {
        delete global.element;
        delete global.browser;
    });
    
    it('should be defined', () => {
        expect(HomePage).to.be.instanceOf(Function);
    });

    it('should have the page name', () => {
        const page = new HomePage('EPAM HomePage', 'http://epam.com', {css: 'body'});
        expect(page.name).not.to.be.undefined;
        expect(page.name).to.equal('EPAM HomePage');
    });

    it('should have the stored URL', () => {
        const page = new HomePage('EPAM HomePage', 'http://epam.com', {css: 'body'});

        expect(page.url).not.to.be.undefined;
        expect(page.url).to.equal('http://epam.com');
    });
         
    
    describe('Logo', () => {
            it('should have method to retrieve LOGO', () => {
                const element = new HomePage('EPAM HomePage', 'http://epam.com', {css: 'body'});
                expect(element.getLogo()).not.to.be.undefined;
    
                const pElement = element.getLogo();
                expect(pElement).to.equal('Logo');
            });
    });

    describe('Header', () => {
        it('should have method to retrieve the header', () => {
            const page = new HomePage ('EPAM HomePage', 'http://epam.com', {css: 'body'});
    
            expect(page.getHeader()).not.to.be.undefined;
            expect(page.getHeader()).to.equal('Header');
        });
    });

    describe('Menu Items', () => {
        it('should have method to retrieve menuitems', () => {
            const element = new HomePage ('EPAM HomePage', 'http://epam.com', {css: 'body'});
            expect(element.getMenuItems()).not.to.be.undefined;

            const pElement = element.getMenuItems();
            expect(pElement.css).to.equal('.top-navigation__item-link');
        });
    });

})