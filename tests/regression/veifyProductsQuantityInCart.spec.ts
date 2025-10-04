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
        await page.goto(process.env.baseURL!)
        await homePage.verifyHomePage()
        await homePage.verifyHomePage()
        await searchedProductsPage.clickOnViewProduct()
        await singleProductDetailsPage.verifyProductsDetailsSection()
        await singleProductDetailsPage.increaseProductQuantity('4')
        await singleProductDetailsPage.verifyExactProductsQuantityInCart('4')
    })
})
