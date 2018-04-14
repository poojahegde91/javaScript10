// Test Case for Assignment10
const expect = require("chai").expect;
const sinon = require('sinon');
const fs = require("fs");
const index = require("../index");



describe("Assignment10 - Test code for correct output", function(){
  it("Test whether the output of empData is array or not", (done) => {
     expect(Array.isArray(index.empData)).to.deep.equal(true);
    done();
   });	


  it("Test whether the output of empName is array or not", (done) => {
     expect(Array.isArray(index.empName)).to.deep.equal(true);
    done();
   });	

  it("Test whether the output of empNameSort is array or not", (done) => {
     expect(Array.isArray(index.empNameSort)).to.deep.equal(true);
    done();
   });

  it ("Matches the desired output of object values as per given input test case", function(done){
    index.exec();
    var string = 'BOB';
    expect(index.maxExpEmpName).to.deep.equal(string);
    done();
  });

  
});

describe("Testing for existence of Array.map() and Array.sort() methods", function() {
  let sandbox = '';
  beforeEach(function() {
    sandbox = sinon.sandbox.create();
  })

  it("should be called map()", function(done) {
    let stub = sandbox.stub(Array.prototype, "map");
    index.exec();
    setTimeout(function() {
      sinon.assert.called(stub);
    }, 10000);

    done();
  });
  
  it("should be called sort()", function(done) {
    let stub = sandbox.stub(Array.prototype, "sort");
    //index.exec();
    setTimeout(function() {
      sinon.assert.called(stub);
    }, 10000);

    done();
  });
  
  afterEach(function() {
    sandbox.restore();
  });
});