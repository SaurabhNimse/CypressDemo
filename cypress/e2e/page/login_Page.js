export class LoginPage{
   
    username ='input[name="username"]'
    password ='input[name="password"]'
    loginButton ='button[type="submit"]'
   
    enterUsername(username){
        cy.get(this.username).type(username)
    }
    enterPassword(password){
        cy.get(this.password).type(password)
    }
    clickLogin(){
        cy.get(this.loginButton).click()
    }
}