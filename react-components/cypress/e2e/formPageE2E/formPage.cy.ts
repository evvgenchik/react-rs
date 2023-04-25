describe('catalog page', () => {
  beforeEach(() => {
    cy.visit('/form');
  });
  it.only('add new card', () => {
    cy.getByData('input-title').type('Js');
    cy.getByData('input-description').type('learn how code');
    cy.getByData('input-date').type('1999-12-31');
    cy.get('input[name="format"]').first().check();
    cy.get('select');
    cy.getByData('input-file').selectFile({
      contents: Cypress.Buffer.from('../../../src/assets'),
      fileName: 'JS.jpg',
      lastModified: Date.now(),
    });
    cy.get('input[type="checkbox"]').check();
    cy.getByData('formPage-button').click();

    cy.get('li').should('have.length', 1);
  });
  it.only('show error on empty input', () => {
    cy.getByData('input-title');
    cy.getByData('formPage-button').click();
    cy.contains('Title is require');
  });
  it.only('show error on incorrect title', () => {
    cy.getByData('input-title').type('js');
    cy.getByData('formPage-button').click();
    cy.contains('Name must start with an uppercase letter');
  });
});
