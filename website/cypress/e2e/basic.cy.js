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

  it("Verifies top nav has 4 options in desktop browser", function () {
    cy.get(".navbar__items > a")
      .should("have.attr", "href")
      .and("include", "/learn")
      .get(".navbar__title")
      .contains("WaveMaker Docs")
      .end();


    var navElements = ["Get started", "Widgets", "How-to", "Blog", "Tutorials", "Releases"];
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

    var hiddenNavElements = ["Get started", "Widgets", "How-to", "Blog", "Tutorials", "Releases"];
    hiddenNavElements.forEach(function (navItem) {
      cy.get(selectors.desktopNavElements)
        .contains(navItem)
        .should("not.be.visible");
    });
  });
});
describe("Sign-in button take to right places", function () {
  var selectors = {
    desktopNavElements: ".slidingNav > ul > li:not(:first-child)"
  };

  beforeEach(function () {
    cy.visit('/');
  });

  it("Verifies Login navigation ", function () {

    cy.get('.navbar__items > a:not(:first-child)')
      .contains("Login").should('have.attr', 'href').then((href) => {
        cy.origin(href, () => {
          cy.visit('/', { 'failOnStatusCode': false });
          cy.get(".signup-container").contains("Login to")
            .end();
        });
      })
  });
  it("Verifies Get Started navigation ", function () {
    cy.get('.navbar__items > a:last-child')
      .contains("Get Started").should('have.attr', 'href').then((href) => {
        cy.origin(href, () => {
          cy.visit('/', { 'failOnStatusCode': false });
          cy.get(".ct-headline").contains("Start your free trial now")
            .end();
        });
      })
  })

  // it("Verifies Footer navigation ", function () {
  //   let footer = cy.get('.extra-links > ul > li')
  //   footer.each((ele, index) => {
  //     cy.get('.extra-links > ul > li')[index].find('a').should('have.attr', 'href').then((href) => {
  //       cy.window().then((win) => {
  //         cy.stub(win, 'open').as('windowOpen');
  //         cy.origin(href, () => {
  //           cy.visit('/', { 'failOnStatusCode': false });
  //           cy.get("h1[class^='ct-headline']").each((element, ind) => {
  //             if (ind == 1) {
  //               cy.wrap(element).should('be.visible').contains("Talk To Us for Pricing")
  //                 .end();
  //             }
  //           });
  //           cy.go('back');
  //         })
  //       })
  //     })
  //   })
  // })
});
