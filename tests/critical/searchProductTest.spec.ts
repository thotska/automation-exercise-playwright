import {test} from '@playwright/test';
import {Homepage} from '../../pages/homepage';
import { BasePage } from '../../pages/basePage';    
import {ProductsPage} from '../../pages/productsPage';
import { SearchedProductsPage } from '../../pages/searchedProductsPage';

test.describe('Search Product Test', async () => {
    let homePage: Homepage   
    let productsPage: ProductsPage
    let basePage: BasePage
    let searchedProductsPage: SearchedProductsPage

    test.beforeEach(async ({ page }) => {
        homePage = new Homepage(page)
        productsPage = new ProductsPage(page)
        basePage = new BasePage(page)
        searchedProductsPage = new SearchedProductsPage(page)
    })
    test('Search product and verify products', async ({ page }) => {
        await page.goto('https://automationexercise.com/')
        await homePage.verifyHomePage()
        await homePage.clickOnNavigationLink("Products")
        await productsPage.verifyAllProductsPage()
        await productsPage.searchForProduct('dress')
        await searchedProductsPage.verifySearchedProductsPage()
        await searchedProductsPage.verifyAllProductsVisible()

    })
})  