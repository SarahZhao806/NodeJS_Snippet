var expect = require('chai').expect;

var tools = require('../lib/tools');

describe('Tools', function() {
        describe('printName()', function() {
        it('should print the last name first', function() {
            var results = tools.printName({first: 'Alex', last: 'Banks'});
            expect(results).to.equal("Banks, Alex");
        });
    });
    
    describe('loadWiki', function() {
        // set timeout as 5 seconds to run any asynchronous test under this test suite(the all test folder), default is 2 seconds
        this.timeout(5000);
        
        it("Load Abraham Lincoln's Wikipedia page", function(done) {
            tools.loadWiki({first: "Abraham", last: "Lincoln"}, function(html) {
                expect(html).to.be.ok;
                done();
            });
        });
    })
});
