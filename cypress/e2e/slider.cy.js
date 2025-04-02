describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  it('Navigates through slides using next and previous buttons', function () {
    cy.visit('http://localhost:3000');
  
    cy.get('.swiper-slide-active .card-description h1')
      .invoke('text')
      .then((initialTitle) => {

        cy.get('.swiper-button-next').click();
        cy.wait(2000); 

        cy.get('.swiper-slide-active .card-description h1')
          .invoke('text')
          .then((newTitle) => {
            expect(newTitle).to.not.eq(initialTitle);
          });
  
        cy.get('.swiper-button-prev').click();
        cy.wait(2000);
  
        cy.get('.swiper-slide-active .card-description h1')
          .invoke('text')
          .then((returnedTitle) => {
            expect(returnedTitle).to.eq(initialTitle);
          });
      });
  });

});

describe('Swiper Gallery Test', function () {
  it('Verifies each slide has title and description', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide').each(($slide) => {
      cy.wrap($slide).within(() => {
        cy.get('.card-description h1')
          .and('not.be.empty');
        cy.get('.card-description p')
          .and('not.be.empty');
      });
    });
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks gallery responsiveness on different devices', function () {
    const viewports = [[1280, 720], [768, 1024], [375, 667]];
    viewports.forEach((size) => {
      cy.viewport(size[0], size[1]);
      cy.visit('http://localhost:3000');
      cy.get('.wrapper').should('be.visible');
      cy.get('.swiper-button-next').should('be.visible');
      cy.get('.swiper-button-prev').should('be.visible');
    });
  });
});


