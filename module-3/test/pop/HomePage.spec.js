const Browser = require('../mock/Browser');
const ElementFinder = require('../mock/ElementFinder');
const HomePage = require('../../pop/HomePage');
const expect = require('chai').expect;

const page = new HomePage ('EPAM HomePage', 'http://epam.com', {css: 'body'});

describe('HomePage Class', () => {
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
        expect(page.name).not.to.be.undefined;
        expect(page.name).to.equal('EPAM HomePage');
    });

    it('should have the stored URL', () => {
        expect(page.url).not.to.be.undefined;
        expect(page.url).to.equal('http://epam.com');
    });
    
    describe('Load', () => {
        it('should have method to load the page by URL', () => {        
            expect(page.load).not.to.be.undefined;
            expect(page.load()).to.equal('http://epam.com');
        });
    });
    
    describe('Logo', () => {
        it('should have method to retrieve LOGO', () => {            
            expect(page.logo).not.to.be.undefined;
            expect(page.logo).to.equal('.header__logo');
        });
    });

    describe('Header', () => {
        it('should have method to retrieve the header', () => {            
            expect(page.retrieveHeader()).not.to.be.undefined;
            expect(page.retrieveHeader()).to.equal('Header');
        });
    });

    describe('Menu Items', () => {
        it('should have method to retrieve menuitems', () => {
            expect(page.retrieveMenuItems()).not.to.be.undefined;
            expect(page.retrieveMenuItems().css).to.equal('.top-navigation__item-link');
        });
    });

    describe('Footer', () => {
        it('should have method to retrieve Footer Brands', () => {
            expect(page.footerBrands).not.to.be.undefined;
            expect(page.footerBrands).to.equal('.footer__brands-list-wrapper');
        });
    });

})