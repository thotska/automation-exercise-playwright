import { test } from '@playwright/test';
import { Homepage } from '../../pages/homepage';
import { BasePage } from '../../pages/basePage';
import { SingleProductDetailsPage } from '../../pages/singleProductDetailsPage';
import { SearchedProductsPage } from '../../pages/searchedProductsPage';

test.describe('Verify Products Quantity in Cart', async () => {
    let homePage: Homepage
    let basePage: BasePage
    let singleProductDetailsPage: SingleProductDetailsPage
    let searchedProductsPage: SearchedProductsPage
    test.beforeEach(async ({ page }) => {
        homePage = new Homepage(page)
        basePage = new BasePage(page)
        singleProductDetailsPage = new SingleProductDetailsPage(page)
        searchedProductsPage = new SearchedProductsPage(page)
    })

    test('Verify Products Quantity in Cart', async ({ page }) => {
        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        // 3. Verify that home page is visible successfully
        // 4. Click 'View Product' for any product on home page
        // 5. Verify product detail is opened
        // 6. Increase quantity to 4
        // 7. Click 'Add to cart' button
        // 8. Click 'View Cart' button
        // 9. Verify that product is displayed in cart page with exact quantity
        await page.goto(process.env.baseurl!)
        await homePage.verifyHomePage()
        await homePage.verifyHomePage()
        await searchedProductsPage.clickOnViewProduct()
        await singleProductDetailsPage.verifyProductsDetailsSection()
        await singleProductDetailsPage.increaseProductQuantity('4')
        await singleProductDetailsPage.verifyExactProductsQuantityInCart('4')
    })
})
