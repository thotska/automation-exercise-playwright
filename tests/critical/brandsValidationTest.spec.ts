import {test} from '@playwright/test';
import {Homepage} from '../../pages/homepage';
import { BasePage } from '../../pages/basePage';
import { SearchedProductsPage } from '../../pages/searchedProductsPage';    


test.describe('Brands Validation Test', async () => {
    let homePage: Homepage   
    let basePage: BasePage  
    let searchedProductsPage: SearchedProductsPage


    test.beforeEach(async ({ page }) => {
        homePage = new Homepage(page)   
        basePage = new BasePage(page)
        searchedProductsPage = new SearchedProductsPage(page)
    })

    test('Brands visibility and navigation', async ({ page }) => {
        await page.goto('https://automationexercise.com/')
        await basePage.clickOnNavigationLink("Products")
        await homePage.verifyBrandsVisible()
        await homePage.clickBrandName('Polo')
        await searchedProductsPage.verifyAllProductsVisible()
        await homePage.clickBrandName('H&M')
        await searchedProductsPage.verifyAllProductsVisible()
    })
})