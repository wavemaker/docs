describe('Check for nav', () => {
    var brokenNavs = [];
	Cypress.on('fail', (error, runnable) => {
		debugger;
		brokenNavs.push(runnable.title.split('Verifies Nav in: ')[1]);
		throw error;
	});

    after(function() {
		cy.writeFile('broken-navs.json', brokenNavs);
	});

	let urlJson = require('../fixtures/wavemaker-docs-urls.json');
	urlJson.files.forEach(link => {
		it('Verifies Nav in: ' + link, () => {
			cy.visit(link);
			cy.get('nav')
				.should('have.class', 'toc')
				.within(() => {
					cy.get('div').should('have.class', 'toggleNav');
				});
			// cy.get('nav')
			// 	.should('have.class', 'onPageNav')
			// 	.within(() => {
			// 		cy.get('ul').should('have.class', 'toc-headings');
			// 	});
		});
	});
	// it('Verifies nav', function() {
	//     cy.fixture('wavemaker-urls.txt').then(text => {
	//         let links = text.split('\n');
	//         links.forEach(element => {
	//             cy.visit(element);
	//             cy.get('nav').should('have.class', 'toc').within(() => {
	//                 cy.get('div').should('have.class', 'toggleNav');
	//             });
	//             cy.get('nav').should('have.class', 'onPageNav').within(() => {
	//                 cy.get('ul').should('have.class', 'toc-headings');
	//             });
	//         });
	//     });
	// });
});
