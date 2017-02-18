const chai = require('chai');
chai.should();
const index = require('../index.js');

describe ('throwing-darts', function() {

  it('should be a function' , function(){
    index.should.exist;
    index.should.be.a('function');
  });

  it('score should equal 0 if num > 10', function(){
    index([12, 15, 20]).should.equal(0);
  })

  it('score should equal 130', function() {
    index([1, 1, 1]).should.equal(130);
  })

  it('score should equal 140', function() {
    index([1, 2, 3, 4]).should.equal(140);
  })

  it('should only accept positive numbers', function() {
    index([-1, 5, 10]).should.return('false');
  })
})