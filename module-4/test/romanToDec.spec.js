const romanToDec = require('../romanToDec');
const expect = require('chai').expect;
const testData = require('./romanToDec.json');

describe('Module 4 - romanToDec', () => {
    it('should be a function', () => {
        expect(romanToDec).to.be.instanceOf(Function);
    });

    it('should throw Error if the input type is not string', () => {
        expect(() => element.romanToDec(true)).to.throw();
    });

    it('should throw Error if the input contains no roman character', () => {
        expect(() => element.romanToDec("X1")).to.throw();
    });    

    testData.forEach(data => {
        it('should return proper value for ' + JSON.stringify(data.arguments), () => {
            expect(romanToDec(...data.arguments)).to.equal(data.result);
        });
    });
});