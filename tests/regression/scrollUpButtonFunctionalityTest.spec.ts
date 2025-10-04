import {test} from '@playwright/test';
import {Homepage} from '../../pages/homepage';
import { BasePage } from '../../pages/basePage';  
import { base } from '@faker-js/faker';

test.describe('Scroll Up Button Functionality Test', async () => {
    let homePage: Homepage   
    let basePage: BasePage  
    test.beforeEach(async ({ page }) => {
        homePage = new Homepage(page)   
        basePage = new BasePage(page)
    })

    test('Scroll Up Button Functionality Test', async ({ page }) => {   
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Scroll down page to bottom
// 5. Verify 'SUBSCRIPTION' is visible
// 6. Click on arrow at bottom right side to move upward
// 7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen

        await page.goto(process.env.baseurl!)
        await homePage.verifyHomePage()
        await homePage.scrollToBottom()
        await basePage.verifyFooterText()
        await homePage.clickONArrowToScrollUp()
        await homePage.verifySubtitle()
     
    })
})