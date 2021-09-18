const calc = require('../calc');
const expect = require('chai').expect;

describe.only('calc', () => {
    /*
     * + calc(3).v // 3
     * + calc(3).add(5).v // 8
     * + calc(3).minus(2).v // 1
     * + calc(4).sqrt().v // 2
     * + calc(3).times(10).v // 30
     * + calc(10).divide(2).v // 5
     * + calc(10).modulo(5).v // 0
     * + calc(5).divide(0) // throw error
     * + calc(-3).sqrt() // throw error
     * calc(3).add(4)
     *     .minus(3)
     *     .times(6).v // 24
     */
    // TODO: write test cases to test calculator


    const x = 3;
    const y = 4;
    const a = 3;
    const b = 6;


describe ("add", () =>{
    it ("should have a proper value", () =>{
        const c = calc(x);
        expect(c.add).not.to.be.undefined;
    });

    it ("should add a number to the current value", () =>{
        const c = calc(x);
        const result = c.add(y).v;
        expect(result).to.equal(x + y);
        
        console.log ("calc_result_add: " + result);
        console.log ("result_add: " + (x + y));
    });
});

describe ("minus", () =>{
    it ("should have a proper value", () =>{
        const c = calc(x);
        expect(c.minus).not.to.be.undefined;
    });

    it ("should substruct a number from the current value", () =>{
        const c = calc(x);
        const result = c.minus(y).v;
        expect(result).to.equal(x - y);

        console.log ("calc_result_minus: " + result);
        console.log ("result_minus: " + (x - y));
    });
});
   
describe ("division", () =>{
    it ("should have a proper value", () =>{
        const c = calc(x);
        expect(c.divide).not.to.be.undefined;
    });

    it ("should handle a division on 0", () =>{
        const c = calc(x);
        expect(()=> c.divide(0)).to.throw();
    });

    it ("should perform a division the current value", () =>{
        const c = calc(x);
        const result = c.divide(y).v;
        expect(result).to.equal(x / y);

        console.log ("calc_result_divide: " + result);
        console.log ("result_divide: " + (x / y));
    });
});

describe ("multiplication", () =>{
    it ("should have a proper value", () =>{
        const c = calc(x);
        expect(()=> c.times()).not.to.be.undefined;
    });
    
    it ("should calculate the multiplication of a given value", () =>{
        const c = calc(x);
        const result = c.times(y).v;
        expect(result).to.equal(x * y);

        console.log ("calc_result_multiplication: " + result);
        console.log ("result_multiplication: " + (x * y));
    });
});

describe ("square", () =>{
    it ("should have a proper value", () =>{
        const c = calc(4);
        expect(()=> c.sqrt()).not.to.be.undefined;
    });
    
    it ("should calculate the square root of a given value", () =>{
        const c = calc(x);
        const result = c.sqrt().v;
        expect(result).to.equal(Math.sqrt(x));

        console.log ("calc_result_sqrt: " + result);
        console.log ("result_sqrt: " + Math.sqrt(x));
    });

    it ("should handle calculation square of negative value", () =>{
        const c = calc(-x);
        expect(()=> c.sqrt()).to.throw();
    });
});  

describe ("modulo", () =>{
    it ("should have a proper value", () =>{
        const c = calc(x);
        expect(c.modulo).not.to.be.undefined;
    });
    
    it ("should return a remainder of division of the current values", () =>{
        const c = calc(x);
        const result = c.modulo(y).v;
        expect(result).to.equal(x % y);

        console.log ("calc_result_modulo: " + result);
        console.log ("result_modulo: " + (x % y));
    });
});
   
describe ("several actions", () =>{
    it ("should calculate several actions at the same time", () =>{
        const c = calc(x);
        const result = c.add(y).minus(a).times(b).v;
        expect(result).to.equal((x + y - a )* b);

        console.log ("calc_result_several: " + result);
        console.log ("result_several: " + ((x + y - a )* b));
    });
});

});