
describe("Check for nav", function() {
    before(function() {
        const fn = () => {
            var fs = require('fs');
            var array = fs.readFileSync('../fixtures/wavemaker-urls.txt').toString().split("\n");
            for(i in array) {
                console.log(array[i]);
            }   
            return array;
          }
          cy.wrap({ foo: fn }).invoke('foo');
        // cy.visit('/');
        // cy.window().then(function() {
            
        // });        

    });

    it('Verifies nav', function() {
        // cy.fixture('wavemaker-urls.txt').then(text => {
        //     let links = text.split('\n');
        //     links.forEach(element => { 
        //         it('triggers event: ' + element, function () {
        //             cy.visit(element); 
        //         });
        //     });
        // });
    });
    
});