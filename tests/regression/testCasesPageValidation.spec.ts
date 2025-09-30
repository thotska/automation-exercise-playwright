import {test} from '@playwright/test';
import {Homepage} from '../../pages/homepage';
import {TestCasesPage} from '../../pages/testCasesPage';


test.describe('Test Cases page validation', async () => {
    let homePage: Homepage   
    let testCasesPage: TestCasesPage
    test.beforeEach('Setting up preconditions', async ({page}) => {
        homePage = new Homepage(page)  
        testCasesPage = new TestCasesPage(page)
        await page.goto('https://automationexercise.com/')
    })
    test('Validating Test Cases page', async ({page}) => {
        await homePage.verifyHomePage()
        await homePage.clickOnTestCasesLink()
        await testCasesPage.verifyingTestCasesPage()
    })
})