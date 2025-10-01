import {Locator, Page, expect} from "@playwright/test";
import { BasePage } from "./basePage";

export class SearchedProductsPage extends BasePage {
    private searchedProductsTitle: Locator
    private allProductsVisibleLocator: Locator



    constructor(page: Page){
        super(page)
    this.searchedProductsTitle = page.getByRole('heading', { name: 'Searched Products' })
    this.allProductsVisibleLocator = page.locator('div[class="features_items"] div[class="single-products"]')
    }
    async verifySearchedProductsPage():Promise<void>{
        await expect(this.searchedProductsTitle).toBeVisible()
        await expect(this.searchedProductsTitle).toHaveText('Searched Products')
    }

    async verifyAllProductsVisible():Promise<void>{
        await expect(this.allProductsVisibleLocator).toBeVisible()
    }
}
