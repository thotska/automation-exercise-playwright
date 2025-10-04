import {test} from '@playwright/test';
import {Homepage} from '../../pages/homepage';
import { BasePage } from '../../pages/basePage';    
import {ProductsPage} from '../../pages/productsPage';
import { SearchedProductsPage } from '../../pages/searchedProductsPage';
import { SignUpLoginPage } from '../../pages/signUpLoginPage';

test.describe('Search Product Test', async () => {
    let homePage: Homepage   
    let productsPage: ProductsPage
    let basePage: BasePage
    let searchedProductsPage: SearchedProductsPage
    let signUpLoginPage: SignUpLoginPage

    test.beforeEach(async ({ page }) => {
        homePage = new Homepage(page)
        productsPage = new ProductsPage(page)
        basePage = new BasePage(page)
        searchedProductsPage = new SearchedProductsPage(page)
        signUpLoginPage = new SignUpLoginPage(page)
    })
    test('Search product and verify products in cart', async ({ page }) => {
        await page.goto(process.env.baseURL!)
        await homePage.clickOnNavigationLink("Products")
        await productsPage.verifyAllProductsPage()
        await productsPage.searchForProduct('dress')
        await searchedProductsPage.verifySearchedProductsPage()
        await searchedProductsPage.verifyAllProductsVisible()
        await searchedProductsPage.addAllProductsToCart()
        await basePage.clickOnNavigationLink("Cart")
        await searchedProductsPage.verifyAllProductsVisible()
        await basePage.clickOnNavigationLink("signup/login")
        await signUpLoginPage.loginWithValidEmailAndPassword(process.env.testuseremail!, process.env.testuserpassword!)
        await basePage.clickOnNavigationLink("Cart")
        await searchedProductsPage.verifyAllProductsVisible()
    })
})  