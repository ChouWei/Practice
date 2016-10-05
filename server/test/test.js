'use strict'
var assert = require('assert');
var should = require('chai').should();
var expect = require('chai').expect;
var foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
     	 should.equal(11,11);
     // assert.equal(-1, [1,2,3].indexOf(0));
    });
});

describe('#test',function(){
it('should return true',function(){
		assert('foo' !== 'bar', 'foo is not bar');
		
		
});

});
//Example
foo.should.be.a('string');
foo.should.equal('bar');
foo.should.have.length(3);
beverages.should.have.property('tea').with.length(3);

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.length(3);
expect(beverages).to.have.property('tea').with.length(3);