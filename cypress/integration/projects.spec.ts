import { projectSelector } from "src/app/components/projects/projects.selector";
it('Close the certificates popup', () => {
    cy.visit('/');
   cy.get(projectSelector.projectButton()).click();
   cy.get('#project-11').should('have.css', 'display', 'flex')
  });