import {test, Page} from '@playwright/test';
import {Homepage} from '../../pages/homepage';
import { BasePage } from '../../pages/basePage';    
import { SignUpLoginPage } from '../../pages/signUpLoginPage';

test.describe('Login with invalid credentials Test', async () => {
    let homePage: Homepage   
    let basePage: BasePage  
    let signUpLoginPage: SignUpLoginPage    
    test.beforeEach(async ({ page }) => {
        homePage = new Homepage(page)   
        basePage = new BasePage(page)
        signUpLoginPage = new SignUpLoginPage(page)    
    })

    test('Login with invalid credentials and verify error message', async ({ page }) => {
        await page.goto('https://automationexercise.com/')
        await homePage.verifyHomePage()
        await homePage.clickOnNavigationLink("Signup / Login")
        await signUpLoginPage.validateLoginToYourAccountTitle()
        await signUpLoginPage.loginWithInvalidEmailAndPassword('jwERHEARH@gmail.com', 'wrongpassword')
        await signUpLoginPage.verifyEmailOrPasswordIncorrectMessage()
    })
})
