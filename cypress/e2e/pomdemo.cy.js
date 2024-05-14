import  {LoginPage} from "./page/login_Page.js"

const loginPage = new LoginPage()

describe('All test',()=>{
    
beforeEach(()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})

it('Test 1',()=>{

    
    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()

})

it.skip('Test 2 ',()=>{

    
    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()

})

it('Test 3 ',()=>{

    
    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin12invalid3')
    loginPage.clickLogin()

})

it('Test 4',()=>{

    
    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()

})

})