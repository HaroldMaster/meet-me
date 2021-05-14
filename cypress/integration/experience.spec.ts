  import { experienceSelector } from "src/app/components/experience/experience.selector";
  it('Close the certificates popup', () => {
      cy.visit('/');
      cy.get(experienceSelector.experienceButton()).click();
      cy.get('#content__experience-3').then(($el) => {
          Cypress.dom.isVisible($el)  
        })
    });