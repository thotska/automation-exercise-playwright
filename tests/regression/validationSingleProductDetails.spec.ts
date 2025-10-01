import {test} from '@playwright/test';
import {Homepage} from '../../pages/homepage';
import { BasePage } from '../../pages/basePage';    
import {SingleProductDetailsPage} from '../../pages/singleProductDetailsPage';
import { SearchedProductsPage } from '../../pages/searchedProductsPage';

test.describe('Single Product Details Page', () => {
    let homepage: Homepage;
    let singleProductDetailsPage: SingleProductDetailsPage;
    let basePage: BasePage;
    let searchedProductsPage: SearchedProductsPage;
    test.beforeEach(async ({ page }) => {
        homepage = new Homepage(page);
        singleProductDetailsPage = new SingleProductDetailsPage(page);
        basePage = new BasePage(page);
        searchedProductsPage = new SearchedProductsPage(page);
    });

    test('should display product details correctly', async ({page}) => {
        await page.goto('https://automationexercise.com/')
        await homepage.verifyHomePage()
        await homepage.clickOnNavigationLink("Products")
        await searchedProductsPage.verifyAllProductsVisible()
        await searchedProductsPage.clickOnViewProduct()
        await singleProductDetailsPage.verifyProductDetails()
    });
});
    