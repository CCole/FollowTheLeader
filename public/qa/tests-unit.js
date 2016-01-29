var message = require('../../lib/message.js'); 
var expect = require('chai').expect; 

suite('message tests', function(){
    test('getMessage() should return a message from Google API',
    function(){
       expect(typeof message.getMessage() === 'string');  
    });
}); 