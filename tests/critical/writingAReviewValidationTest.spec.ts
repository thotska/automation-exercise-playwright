import {test} from '@playwright/test';
import {Homepage} from '../../pages/homepage';
import { BasePage } from '../../pages/basePage';
import { ProductsDetailPage } from '../../pages/productsDetailPage';
import { ProductsPage } from '../../pages/productsPage';

test.describe('Writing a Review Validation Test', async () => {
    let homePage: Homepage
    let basePage: BasePage
    let productsDetailPage: ProductsDetailPage  
    let productsPage: ProductsPage
    test.beforeEach(async ({ page }) => {
        homePage = new Homepage(page)
        basePage = new BasePage(page)
        productsDetailPage = new ProductsDetailPage(page)  
        productsPage = new ProductsPage(page)
    })

    test('Write a review without login and verify error message', async ({ page }) => {
        await page.goto(process.env.baseURL!)
        await homePage.verifyHomePage()
        await homePage.clickOnNavigationLink("Products")
        await productsPage.verifyCommonProductsHeading("All Products")
        await productsPage.clickOnViewProduct(0)
        await productsDetailPage.verifyWriteYourReviewTitle()
        await productsDetailPage.fillReviewForm("Test User", process.env.testemail!, "This is a great item.")
        await productsDetailPage.verifySuccessMessage()
    })
}) 