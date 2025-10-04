import {test} from '@playwright/test';
import {Homepage} from '../../pages/homepage';
import { BasePage } from '../../pages/basePage';
import { CartPage } from '../../pages/cartPage';

test.describe('Add Recommended Item To Cart Test', async () => {
    let homePage: Homepage   
    let basePage: BasePage  
    let cartPage: CartPage
    test.beforeEach(async ({ page }) => {
        homePage = new Homepage(page)   
        basePage = new BasePage(page)
        cartPage = new CartPage(page)
    })
    test('Add Recommended Item To Cart Test', async ({ page }) => {
//1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Scroll to bottom of page
// 4. Verify 'RECOMMENDED ITEMS' are visible
// 5. Click on 'Add To Cart' on Recommended product
// 6. Click on 'View Cart' button
// 7. Verify that product is displayed in cart page
        await page.goto(process.env.baseurl!)
        await homePage.verifyRecommendedItemsVisible()
        await homePage.clickOnAddToCartOfRecommendedItems(0)
        await homePage.clickOnViewCartButton()
        await cartPage.verifyProductsAreInCart()
    })  
})