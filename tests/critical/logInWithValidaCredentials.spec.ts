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

    test('Login with valid credentials and verify success message', async ({ page }) => {
        await page.goto(process.env.baseURL!)
        await homePage.verifyHomePage()
        await homePage.clickOnNavigationLink("Signup / Login")
        await signUpLoginPage.validateLoginToYourAccountTitle()
        const userName = process.env.userName
        const password = process.env.password
        await signUpLoginPage.loginWithValidEmailAndPassword(userName!, password!)
        await signUpLoginPage.verifyLoginSuccessMessage()
    })
}) 