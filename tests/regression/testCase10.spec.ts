import{test} from '@playwright/test';
import {Homepage} from '../../pages/homepage';
import { BasePage } from '../../pages/basePage';    


test.describe('Footer section validation', async () => {
    let homePage: Homepage   
    let basePage: BasePage

    test.beforeEach(async ({ page }) => {
        homePage = new Homepage(page)
    
        basePage = new BasePage(page)
    })

    test('Footer text validation', async ({ page }) => {
        await page.goto('https://automationexercise.com/')
        await homePage.verifyHomePage()
        await homePage.scrollToBottom()
        await basePage.verifyFooterText()
        await basePage.enterEmailAndClickArrow('test@example.com')
        await basePage.verifySuccessMessage()
    })

})
