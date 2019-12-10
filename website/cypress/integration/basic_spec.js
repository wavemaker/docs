describe('Top Navigation in web & mobile', function() {
  var nav = ".slidingNav", 
	navSearchWrapper = ".navSearchWrapper",
	learnAppUrl = "http://localhost:3000/learn/";
  
  it('Verifies top nav has 4 options in desktop browser', function() {
    cy.visit(learnAppUrl);
	
	var navElements = ["Docs", "Widgets", "How-to", "Releases"];
	navElements.forEach(function(navItem) {
		cy.get(nav).contains(navItem).should("be.visible");
	});
  });
  
  it("Search should be visible in desktop and mobile", function() { 
	cy.visit(learnAppUrl);
	
	cy.get(nav).get(navSearchWrapper).should("be.visible");
	cy.viewport('iphone-6');
	cy.get(nav).get(navSearchWrapper).should("be.visible");
  });
  
  it('Verifies that only Docs, Search is visible in the navbar in mobile', function() {
	cy.viewport('iphone-6');
	cy.visit(learnAppUrl);
	
	var navElements = ["Docs"];
	navElements.forEach(function(navItem) {
		cy.get(nav).contains(navItem).should("be.visible");
	});
	
	cy.get(nav).get(navSearchWrapper).should("be.visible");
	
	var hiddenNavElements = ["Widgets", "How-to", "Releases"];
	hiddenNavElements.forEach(function(navItem) {
		cy.get(nav).contains(navItem).should("not.be.visible");
	});
  });
  
  it('Verifies that hamburger menu is visible in mobile', function() {
	cy.viewport('iphone-6');
	cy.visit(learnAppUrl);
	
	cy.get(nav).contains("Docs").click().end();
	cy.get(".hamburger-menu").should("be.visible");
  });
});

describe("Login & Free trial button take to right places", function() {
	var learnAppUrl = "http://localhost:3000/learn/";
	it('Verifies navigation elements in desktop', function() {
		cy.visit(learnAppUrl);
		var nav = ".slidingNav";
		
		cy.get(nav).contains("Login").click().end();
		cy.get(nav).contains("Start free trial").click().end();
		//cy.get(".main-container").contains("PLATFORM").click();
	});
});