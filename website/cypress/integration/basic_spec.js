describe('Top Navigation in web & mobile', function() {
  var nav = ".slidingNav > ul > li", 
	navSearchWrapper = ".navSearchWrapper",
	learnAppUrl = "http://localhost:3000/learn/";
  
  beforeEach(function () { 
	  cy.visit(learnAppUrl);
  });
  
  it('Verifies top nav has 4 options in desktop browser', function() {
	var s = ".slidingNav > ul > li:not(:first-child)";
	var navElements = ["Docs", "Widgets", "How-to", "Releases"];
	navElements.forEach(function(navItem) {
		cy.get(s).contains(navItem).should("be.visible");
	});
	cy.get('.slidingNav > ul > li').get(navSearchWrapper).should("be.visible");

	cy.get(".slidingNav > ul > li:first-child").get(".dropdown").should('not.be.visible');
	
  });
  
  
  it('Verifies that only Docs, Search is visible in the navbar in mobile', function() {
	cy.viewport('iphone-6');
	var nav = ".slidingNav > ul > li:first-child";
	var s = ".slidingNav > ul > li:not(:first-child)";

	
	cy.get("#dropdown").contains("Docs").should("be.visible");
		
	cy.get('.slidingNav > ul > li').get(navSearchWrapper).should("be.visible");
	
	
	var hiddenNavElements = ["Widgets", "How-to", "Releases"];
	hiddenNavElements.forEach(function(navItem) {
		cy.get(s).contains(navItem).should("not.be.visible");
	});
  });
  
  it('Verifies that hamburger menu is visible in mobile', function() {
	cy.viewport('iphone-6');
	
	cy.get("#dropdown").click().get('dropdown-item:first-child').should('be.visible').click();
	cy.get(".hamburger-menu").should("be.visible");
  });
});

describe("Login & Free trial button take to right places", function() {
	var learnAppUrl = "http://localhost:3000/learn/";
	
	beforeEach(function () { 
	  cy.visit(learnAppUrl);
	});
	
	it('Verifies navigation elements in desktop', function() {
		var nav = ".slidingNav";
		
		cy.get(nav).contains("Login").click().end();
		cy.get(nav).contains("Start free trial").click().end();
		//cy.get(".main-container").contains("PLATFORM").click();
	});
});