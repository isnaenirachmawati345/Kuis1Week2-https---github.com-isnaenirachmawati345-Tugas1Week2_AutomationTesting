Email = 'email'
password = '#Password'
loginBtn = '[class="button-1 login-button"]'
account = '[class="account"]'
remmember ='#RememberMe'
class LoginPage {
    visit() {
      cy.visit('/login')
    }
  
    inputEmail(Email) {
      cy.get(this.Email).type(Email)
    }
  
    inputPassword(password) {
      cy.get(this.password).type(password)
    }
  
    clickLoginButton() {
      cy.get(this.loginBtn).click()
    }
    account(){
        cy.get(this.account).contains('Isna@gmail.com')
    }
    remmember(){
        cy.get(this.remmember).click()
    }
}
  
  export default LoginPage()