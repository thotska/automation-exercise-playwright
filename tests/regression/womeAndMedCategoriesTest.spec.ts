import {test} from '@playwright/test';
import {Homepage} from '../../pages/homepage';
import { BasePage } from '../../pages/basePage';
import { CategoriesPage } from '../../pages/categoriesPage';

test.describe('Women and Men Categories', () => {
    let homepage: Homepage;
    let categoriesPage: CategoriesPage;

    test.beforeEach(async ({ page }) => {
        homepage = new Homepage(page);
        categoriesPage = new CategoriesPage(page);
    });

    test('verify women dress page', async ({ page }) => {
        await page.goto('https://automationexercise.com/');
        await homepage.clickOnWomenCategoryDress();
        await categoriesPage.verifyHeader('Women - Dress Products');
    });

    test('verify men jeans page', async ({ page }) => {
        await page.goto('https://automationexercise.com/');
        await homepage.clickOnMenCategoryJeans();
        await categoriesPage.verifyHeader('Men - Jeans Products');
    });
});
