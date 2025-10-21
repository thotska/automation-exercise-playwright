import { test } from '@playwright/test';
import { Homepage } from '../../pages/homepage';
import { BasePage } from '../../pages/basePage';
import { SingleProductDetailsPage } from '../../pages/singleProductDetailsPage';
import { SearchedProductsPage } from '../../pages/searchedProductsPage';
import { CartPage } from '../../pages/cartPage';    

test.describe('Verify Products Quantity in Cart', async () => {
    let homePage: Homepage
    let basePage: BasePage
    let singleProductDetailsPage: SingleProductDetailsPage
    let cartPage: CartPage
    let searchedProductsPage: SearchedProductsPage
    test.beforeEach(async ({ page }) => {
        homePage = new Homepage(page)
        basePage = new BasePage(page)
        singleProductDetailsPage = new SingleProductDetailsPage(page)
        searchedProductsPage = new SearchedProductsPage(page)
        cartPage = new CartPage(page)
    })

    test('Verify Products Quantity in Cart', async ({ page }) => {
//1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Add 10 products to cart
// 5. Click 'Cart' button
// 6. Verify that cart page is displayed
// 7. Click 'X' button corresponding to each product
// 8. Verify that product is removed from the cart
        await page.goto(process.env.baseURL!)
        await homePage.verifyHomePage()
        await searchedProductsPage.addTenToCart()
        await basePage.clickOnNavigationLink("Cart")
        await cartPage.verifyCartPage()
        await cartPage.removeAllProductsFromCart()
        await cartPage.verifyNoProductsAreInCart()
    })
})