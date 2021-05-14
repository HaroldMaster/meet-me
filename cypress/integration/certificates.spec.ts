import { aboutSelector } from "src/app/components/about-me/about-me.selector";
import { certificateSelector } from "src/app/components/certificates/certificates.selectors";
it('loads the web page', () => {
  cy.visit('/');
});
it('Open the certificates popup', () => {
  cy.visit('/');
  cy.get(aboutSelector.aboutMePopup()).click();
  cy.wait(5000)
  cy.url().should('contains', '/#popup');
});
it('Close the certificates popup', () => {
    cy.visit('/');
    cy.get(aboutSelector.aboutMePopup()).click();
    cy.wait(5000);
    cy.get(certificateSelector.closeButton()).click();
    cy.url().should('contains', '/#');
  });