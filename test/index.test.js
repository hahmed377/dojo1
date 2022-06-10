var assert = require('assert');
var add = require('../index.js').add
var subtract = require('../index.js').subtract
describe('add()', function () {
    it('should add two number', function () {
        var result = add(2,4)
        assert.equal(6, result);
    });
    
    it('should add two number', function () {
        var result = add(2,4)
        assert.notEqual('w', result);
});
});
describe('subtract()', function () {
    it('should subtract right param from left param', function () {
        var result = subtract(10,5)
        assert.equal(5, result);
    });
    });
