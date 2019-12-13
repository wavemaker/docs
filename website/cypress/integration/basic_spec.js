describe("Top Navigation in web & mobile", function() {
  var selectors = {
    navElements: ".slidingNav > ul > li",
    navElementsFirstChild: ".slidingNav > ul > li:first-child",
    desktopNavElements: ".slidingNav > ul > li:not(:first-child)",
    navSearchWrapper: ".navSearchWrapper",
    mobileNavDropDown: "#dropdown",
    mobileNavDropDownFirstChild: ".dropdown-menu > a:first-child",
    hamburgerMenu: ".hamburger-menu"
  };


  beforeEach(function() {
    cy.visit('/');
  });

  it("Verifies top nav has 4 options in desktop browser", function() {
    cy.get("header>a")
      .should("have.attr", "href")
      .and("include", "/learn")
      .get("h2.headerTitleWithLogo")
      .contains("WaveMaker Docs")
      .end();

    var navElements = ["Get started", "Widgets", "How-to", "Releases"];
    navElements.forEach(function(navItem) {
      cy.get(selectors.desktopNavElements)
        .contains(navItem)
        .should("be.visible");
    });
    cy.get(selectors.navElements)
      .get(selectors.navSearchWrapper)
      .should("be.visible");

    cy.get(selectors.navElementsFirstChild)
      .get(".dropdown")
      .should("not.be.visible");
  });

  it("Verifies that only Docs, Search is visible in the navbar in mobile", function() {
    cy.viewport("iphone-6");

    cy.get(selectors.mobileNavDropDown)
      .contains("Docs")
      .should("be.visible");

    cy.get(selectors.navElements)
      .get(selectors.navSearchWrapper)
      .should("be.visible");

    var hiddenNavElements = ["Widgets", "How-to", "Releases"];
    hiddenNavElements.forEach(function(navItem) {
      cy.get(selectors.desktopNavElements)
        .contains(navItem)
        .should("not.be.visible");
    });
  });

  it("Verifies that hamburger menu is visible in mobile", function() {
    cy.viewport("iphone-6");

    cy.get(selectors.mobileNavDropDown).click();
    cy.get(selectors.mobileNavDropDownFirstChild)
      .click()
      .end();
    cy.get(selectors.hamburgerMenu).should("be.visible");
  });
});

describe("Login & Free trial button take to right places", function() {
  var selectors = {
    desktopNavElements: ".slidingNav > ul > li:not(:first-child)"
  };

  beforeEach(function() {
    cy.visit('/');
  });

  it("Verifies navigation elements in desktop", function() {
    var nav = selectors.desktopNavElements;

    cy.get(nav)
      .contains("Login")
      .click()
      .end();
    cy.get(nav)
      .contains("Start free trial")
      .click()
      .end();
    //cy.get(".main-container").contains("PLATFORM").click();
  });
});
