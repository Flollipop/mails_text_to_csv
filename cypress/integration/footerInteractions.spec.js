context('Movie search', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should find link to repo', () => {
    cy.get('.App-link').should('be.visible').and('have.text', 'See the code');
  });
});
