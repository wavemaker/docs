describe("Check for anchors", function() {
    it('Verifies anchors', function() {
        cy.fixture('wavemaker-urls.txt').then(text => {
            let links = text.split('\n');
            let brokenLinks = [];
            links.forEach(link => { 
                cy.visit(link).get('a').each(($elemet)=> {
                    cy.request({
                        url: $elemet[0].href,
                        failOnStatusCode: false
                    }).then((response)=> {
                        //expect(response.status).to.eq(200 || 302 || 401)
                        if(response.status === 404 || 500){
                            brokenLinks.push($elemet[0].href);
                            console.log('-----broken-----' + $elemet[0].href);
                        } 
                    });
                });  
                // cy.document().then((doc) => {
                //     var a = doc.getElementsByTagName('a');
                //     for (var i= 0; i < a.length; i++){
                //         if(a[i].href.startsWith('http://localhost')) {
                //             cy.request(a[i].href);
                //         }
                //     }
                // });
                
                // cy.get('a').should('have.attr', 'href').then((href) => {
                //     cy.visit(href)
                // });
            });
        });
        
    });
    
});
