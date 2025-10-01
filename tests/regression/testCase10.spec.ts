import{test} from '@playwright/test';
import {Homepage} from '../../pages/homepage';
import { BasePage } from '../../pages/basePage';    
import {FooterPage} from '../../pages/footerPage';


test.describe('Footer section validation', async () => {
    let homePage: Homepage   
    let footerPage: FooterPage
    let basePage: BasePage

    test.beforeEach(async ({ page }) => {
        homePage = new Homepage(page)
        footerPage = new FooterPage(page)
        basePage = new BasePage(page)
    })

    test('Footer text validation', async ({ page }) => {
        await page.goto('https://automationexercise.com/')
        await homePage.verifyHomePage()
        await homePage.scrollToBottom()
        await footerPage.verifyFooterText()
        await footerPage.enterEmailAndClickArrow('test@example.com')
        await footerPage.verifySuccessMessage()
    })

})
