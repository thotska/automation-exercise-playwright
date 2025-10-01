import { test, expect } from "@playwright/test"
import { Homepage } from "../../pages/homepage"
import { SignUpLoginPage } from "../../pages/signUpLoginPage"
import { faker} from '@faker-js/faker'
import { signUpPage} from "../pages/signUpPage" 


test.describe('End to end test cases', async () => {
    let homePage: Homepage
    let signUpLoginPageL: SignUpLoginPage
    let signUpPage: signUpPage

    test.beforeEach('Setting up preconditions', async ({ page }) => {
        signUpLoginPageL = new SignUpLoginPage(page)
        homePage = new Homepage(page)
        signUpPage = new signUpPage(page)

        await page.goto(process.env.baseURL!)
    })
    test('end to end account create and delete flow', async ({ page }) => {
        await homePage.verifyHomePage()
        await homePage.clickOnNavigationLink('Signup / Login')
        await signUpLoginPageL.validateSignUpTitle()
        const fullName = `${name} ${faker.person.lastName()}`
        const email = faker.internet.email()
        const password = faker.internet.password()

        await signUpPage.fillAccountDetails(fullName, email, password, "john", "doe", "123 street", "new york",
             "united states", "12345", "1234567890")
        await signUpPage.clickOnCreateAccountButton()
        
    })






})