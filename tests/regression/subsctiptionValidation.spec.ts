import { test } from '@playwright/test';
import { Homepage } from '../../pages/homepage';
import { BasePage } from '../../pages/basePage';

test.describe('Subscription validation', async () => {
    let homePage: Homepage
    let basePage: BasePage
    test.beforeEach(async ({ page }) => {
        homePage = new Homepage(page)
        basePage = new BasePage(page)
    })
    test('Subscription in cart page', async ({ page }) => {
        await page.goto('https://automationexercise.com/')
        await homePage.verifyHomePage()
        await homePage.clickOnNavigationLink("Cart")
        await basePage.verifyFooterText()
        await basePage.enterEmailAndClickArrow('test2@example.com')
        await basePage.verifySuccessMessage()
    })
})