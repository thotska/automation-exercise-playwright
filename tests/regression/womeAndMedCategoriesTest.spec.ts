import {test} from '@playwright/test';
import {Homepage} from '../../pages/homepage';
import { BasePage } from '../../pages/basePage';
import {WomenDressPage} from '../../pages/womenDressPage';      
import {MenJeansPage} from '../../pages/menJeansPage'; 

test.describe('Women and Men Categories', () => {
    let homepage: Homepage;
    let womenDressPage: WomenDressPage;
    let menJeansPage: MenJeansPage;

    test.beforeEach(async ({ page }) => {
        homepage = new Homepage(page);
        womenDressPage = new WomenDressPage(page);
        menJeansPage = new MenJeansPage(page);
    });

    test('verify women dress page', async ({ page }) => {
        await page.goto('https://automationexercise.com/');
        await homepage.clickOnWomenCategoryDress();
        await womenDressPage.verifyWomenDressPage();
    });

    test('verify men jeans page', async ({ page }) => {
        await page.goto('https://automationexercise.com/');
        await homepage.clickOnMenCategoryJeans();
        await menJeansPage.verifyMenJeansPage();
    });
});
