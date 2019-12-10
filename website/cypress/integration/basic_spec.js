describe('Top Navigation in web & mobile', function() {
	
  it('Verifies navigation elements in desktop', function() {
    cy.visit("http://localhost:3000/learn/");
	var nav = ".slidingNav";
	var navElements = ["Docs", "Widgets", "How-to", "Releases"];
	navElements.forEach(function(navItem) {
		cy.get(nav).contains(navItem);
	});
	
  });
  
  it('Verifies navigation elements in mobile', function() {
	cy.viewport('iphone-6');
	var nav = ".slidingNav";
	var navElements = ["Docs"];
	navElements.forEach(function(navItem) {
		cy.get(nav).contains(navItem);
	});
	//Add assertion to check that only Docs is visible and not others in slidingNav and that search bar is visible.
  });
  
  it('Verifies that hamburger menu is visible in mobile', function() {
	cy.viewport('iphone-6');
	var nav = ".slidingNav";
		
	cy.get(nav).contains("Docs").click();
	cy.get(".hamburger-menu").should("be.visible");
  });
});

describe("Login & Free trial button take to right places", function() {
	it('Verifies navigation elements in desktop', function() {
		cy.visit("http://localhost:3000/learn/");
		var nav = ".slidingNav";
		
		cy.get(nav).contains("Login").click();
		cy.get(nav).contains("Start free trial").click();
		//cy.get(".main-container").contains("PLATFORM").click();
	});
});