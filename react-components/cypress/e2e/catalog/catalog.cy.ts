describe('catalog page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('content correct header', () => {
    cy.getByData('header-location');
  });
  it('amount of elements', () => {
    cy.getByData('cardlist-item').should('have.length.at.least', 20);
  });
  it('search book', () => {
    cy.getByData('cardlist-search').type('js');
    cy.getByData('cardlist-search').should('have.value', 'js');
    cy.getByData('cardlist-form').submit();
    cy.getByData('cardlist-item').should('have.length.at.least', 1);
    cy.getByData('item-titile').should(
      'have.text',
      'Modern Frontend Development with Node.js'
    );
  });
});
