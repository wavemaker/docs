describe('Check for nav', () => {
	let brokenNavs = [];
	Cypress.on('fail', (error, runnable) => {
		const fileName = runnable.title.split('Verifies left nav in: ')[1];
		brokenNavs.push(fileName);
		error.message = 'Left Nav is missing in ' + fileName + '.md';
		throw error;
	});

	after(function() {
		cy.writeFile('broken-navs-git.json', brokenNavs);
	});

	let urlJson = require('../fixtures/changedFiles.json');
	urlJson.forEach(link => {
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
