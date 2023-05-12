describe('Check for nav', () => {
	var brokenNavs = [];
	Cypress.on('fail', (error, runnable) => {
		brokenNavs.push(runnable.title.split('Verifies Nav in: ')[1]);
		throw error;
	});

	after(function() {
		cy.writeFile('broken-navs.json', brokenNavs);
	});

	let urlJson = require('../fixtures/wavemaker-docs-urls.json');
	urlJson.files.forEach(link => {
        //skip if it is from slides directory.
        if(link.startsWith("slides")) {
            return;
        }
        it('Verifies left nav in: ' + link, () => {
			cy.visit(link);
			cy.get('nav')
				.should('have.class', 'toc')
				.within(() => {
					cy.get('div').should('have.class', 'toggleNav');
				});
		});
	});
});
