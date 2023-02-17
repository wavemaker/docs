describe('Check for anchors', function() {
	let brokenLink = [];

	after(function() {
		cy.writeFile('broken-urls.json', brokenLink);
	});

	let urlJson = require('../fixtures/wavemaker-docs-urls.json');
	urlJson.files.forEach(link => {
        //skip if it is from slides directory.
        if(link.startsWith("slides")) {
            return;
        }
        it('Broken url check for: ' + link, function() {
			cy.visit(link)
				.get('a')
				.not('.navItem') 
				.not('.dropdown-item')
        .not('#dropdown')
				.each($element => {
					if ($element[0].href.startsWith(Cypress.config().baseUrl)) {
						cy.request({
							url: $element[0].href,
							failOnStatusCode: false,
						}).then(response => {
							if (response.status === 404 || response.status === 500) {
								let brokenLinksObj = {};
								brokenLinksObj.url = $element[0].href;
								brokenLinksObj.pageUrl = link;
								brokenLinksObj.text = $element[0].textContent;
								brokenLink.push(brokenLinksObj);
							}
						});
					}
				});
		});
	});
});
