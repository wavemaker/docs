describe("Check for nav", function() {
    it('Verifies nav', function() {
        cy.fixture('wavemaker-urls.txt').then(text => {
            let links = text.split('\n');
            links.forEach(element => { 
                cy.visit(element); 
                cy.get('nav').should('have.class', 'toc').within(() => {
                    cy.get('div').should('have.class', 'toggleNav');
                });
                cy.get('nav').should('have.class', 'onPageNav').within(() => {
                    cy.get('ul').should('have.class', 'toc-headings'); 
                });
            });
        });
    });
    
});