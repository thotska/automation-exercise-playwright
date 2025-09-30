import {test} from '@playwright/test';
import {Homepage} from '../../pages/homepage';
import { BasePage } from '../../pages/basePage';    
import {TestCasesPage} from '../../pages/testCasesPage';


test.describe('Test Cases page validation', async () => {
    let homePage: Homepage   
    let testCasesPage: TestCasesPage
    let basePage: BasePage
    test.beforeEach('Setting up preconditions', async ({page}) => {
        homePage = new Homepage(page)  
        testCasesPage = new TestCasesPage(page)
        basePage = new BasePage(page)
        await page.goto('https://automationexercise.com/')
    })
    test('Validating Test Cases page', async ({page}) => {
        await homePage.verifyHomePage()
        await homePage.clickOnNavigationLink("Test Cases")
        await testCasesPage.verifyingTestCasesPage()
    })
})