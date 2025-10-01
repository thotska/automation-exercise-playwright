import {expect, Locator, Page} from "@playwright/test";
import { BasePage } from "./basePage";
import { Homepage } from "./homepage";

export class ProductsPage extends BasePage {

    private allProductsHeading: Locator
    private searchField: Locator
    private searchButton: Locator
  

    constructor(page: Page){
        super(page)
        this.allProductsHeading = page.getByRole('heading', { name: 'All Products' })
        this.searchField = page.getByRole('textbox', { name: 'Search Product' })
        this.searchButton = page.getByRole('button', { name: '' })
    }

    async verifyAllProductsPage():Promise<void>{
        await this.allProductsHeading.isVisible()
        expect (this.allProductsHeading).toHaveText('All Products')
    }

    async searchForProduct(productName: string):Promise<void>{
        await this.searchField.fill(productName)
        await this.searchButton.click()

    }
}