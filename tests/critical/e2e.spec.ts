import { test, expect } from "@playwright/test"
import { Homepage } from "../../pages/homepage"
import { SignUpLoginPage } from "../../pages/signUpLoginPage"
import { faker } from '@faker-js/faker'
import { SignUpPage } from "../../pages/signUpPage"


test.describe('End to end test cases', async () => {
    let homePage: Homepage
    let signUpLoginPageL: SignUpLoginPage
    let signUpPage!: SignUpPage

    test.beforeEach('Setting up preconditions', async ({ page }) => {
        signUpLoginPageL = new SignUpLoginPage(page)
        homePage = new Homepage(page)
        signUpPage = new SignUpPage(page)

        await page.goto(process.env.baseURL!)
    })
    test('end to end account create and delete flow', async ({ page }) => {
        await homePage.verifyHomePage()
        await homePage.clickOnNavigationLink('Signup / Login')
        await signUpLoginPageL.validateSignUpTitle()
        const firstName = faker.person.firstName()
        const lastName = faker.person.lastName()
        const fullName = `${firstName} ${lastName}`
        const email = faker.internet.email()
        const password = faker.internet.password()
        const title = faker.helpers.arrayElement(['Mr.', 'Mrs.'])
        const day = faker.number.int({ min: 1, max: 28 }).toString()
        const month = faker.number.int({ min: 1, max: 12 }).toString()
        const year = faker.number.int({ min: 1950, max: 2000 }).toString()

        await signUpPage.fillAccountDetail(title, password, day, month, year)
        await signUpPage.clickCreateAccountButton()
        
    })






})