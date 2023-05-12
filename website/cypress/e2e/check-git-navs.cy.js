describe('Check for nav', () => {
	let brokenNavs = [];
	Cypress.on('fail', (error, runnable) => {
		const fileName = runnable.title.split('Verifies left nav in: ')[1];
		brokenNavs.push(fileName);
		error.message = 'Left Nav is missing in ' + fileName + '.md';
		throw error;
	});

	after(function () {
		cy.writeFile('broken-navs-git.json', brokenNavs);
	});

	let urlJson = require('../fixtures/changedFiles.json');
	urlJson.forEach(link => {
		//skip if it is from slides directory.
		if (link.startsWith("slides")) {
			return;
		}
		it('Verifies left nav in: ' + link, () => {
			cy.viewport("iphone-6");
			cy.visit(link);
			Cypress.on('uncaught:exception', (err, runnable) => { return false; })
			cy.get('nav')
				.should('have.class', 'navbar')
				.within(() => {
					cy.get('*[class^="navbar__toggle"]').end();
				});
		});
	});
});
