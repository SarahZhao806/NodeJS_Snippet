var expect = require('chai').expect;
var nock = require('nock');
var tools = require('../lib/tools');

describe('Tools', function() {
        describe('printName()', function() {
        it('should print the last name first', function() {
            var results = tools.printName({first: 'Alex', last: 'Banks'});
            expect(results).to.equal("Banks, Alex");
        });
    });
    
    describe('loadWiki', function() {
        before(function() {
            
            nock('https://en.wikipedia.org')
                .get("/wiki/Abraham_Lincoln")
                .reply(200, "Mock Abraham Lincoln Page");
        });
        
        
        it("Load Abraham Lincoln's Wikipedia page", function(done) {
            tools.loadWiki({first: "Abraham", last: "Lincoln"}, function(html) {
//                expect(html).to.be.ok;
                expect(html).to.equal("Mock Abraham Lincoln Page");
                done();
            });
        });
    })
});
