describe("Top Navigation in web & mobile", function () {
  var selectors = {
    navElements: ".slidingNav > ul > li",
    navElementsFirstChild: ".slidingNav > ul > li:first-child",
    desktopNavElements: ".navbar__items > a:not(:first-child)",
    navSearchWrapper: ".navSearchWrapper",
    mobileNavDropDown: ".navbar__toggle",
    mobileNavDropDownFirstChild: ".dropdown-menu > a:first-child",
    hamburgerMenu: ".hamburger-menu"
  };


  beforeEach(function () {
    cy.visit('http://localhost:3000/learn/')
    Cypress.on('uncaught:exception', (err, runnable) => { return false; })
  });

  it("Verifies top nav has 6 options in desktop browser", function () {
    cy.get(".navbar__items > a")
      .should("have.attr", "href")
      .and("include", "/learn")
      .get(".navbar__title")
      .contains("WaveMaker Docs")
      .end();


    var navElements = ["Web", "Mobile", "Blog", "Releases", "Academy", "Schedule Demo"];
    navElements.forEach(function (navItem) {
      cy.get(selectors.desktopNavElements)
        .contains(navItem)
        .should("be.visible");
    });

    cy.get(".navbar__toggle")
      .should("not.be.visible");
  });

  it("Verifies that only Docs, Search is visible in the navbar in mobile", function () {
    cy.viewport("iphone-6");

    var hiddenNavElements = ["Web", "Mobile", "Blog", "Releases", "Academy", "Schedule Demo"];
    hiddenNavElements.forEach(function (navItem) {
      cy.get(selectors.desktopNavElements)
        .contains(navItem)
        .should("not.be.visible");
    });
  });
});
describe("schedule demo button take to right places", function () {
  var selectors = {
    desktopNavElements: ".slidingNav > ul > li:not(:first-child)"
  };

  beforeEach(function () {
    cy.visit('/');
  });

  it("Verifies schedule demo navigation ", function () {
    cy.get('.navbar__items > a:last-child')
      .contains("Schedule Demo").should('have.attr', 'href').then((href) => {
        cy.request(href).its('body').should('include', 'Schedule a Demo or Talk to an Expert for a Free Pilot.').end();
      });
  })

});
