import Login from '../pages/Login'

it('stepper should default to 0', () => {
  cy.mount(<Login />)
  cy.get(counterSelector).should('have.text', '0')
})
