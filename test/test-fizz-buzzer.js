// import Chai expect into variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for 'fizzBuzzer' function
describe('fizzBuzzer tests', function() {

    // test for normal cases
    it('should be a number divisible by 15 returning \'fizz-buzz\'', function() {
        [15, 30, 150, 3000].forEach( function (input) {
            expect(fizzBuzzer(input)).to.equal('fizz-buzz');
        });
    });

    it('should be a number divisible by 5 returning \'buzz\'', function() {
        [5, 10, 20, 205].forEach( function (input) { 
            expect(fizzBuzzer(input)).to.equal('buzz');
        });
    });

    it('should be a number divisible by 3 returning \'fizz\'', function() {
        [3, 9, 36, 363].forEach( function (input) { 
            expect(fizzBuzzer(input)).to.equal('fizz');
        });
    });

    it('should be a number not divisible by 15, 5 or 3', function() {
        [4, 11, 19].forEach( function (input) {
            expect(fizzBuzzer(input)).to.equal(input);
        });
    });

    // test for edge cases
    it('should raise error if input is not a number', function() {
        [false, '3', true, 'busted'].forEach( function (input) {
            expect( function (input) {
                fizzBuzzer(input);
            }).to.throw(Error); 
        });
    });
});