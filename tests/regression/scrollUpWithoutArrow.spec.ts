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

        await page.goto(process.env.baseurl!)
        await homePage.verifyHomePage()
        await homePage.scrollToBottom()
        await basePage.verifyFooterText()
        await homePage.scrollToTop()
        await homePage.verifySubtitle()
     
    })
})