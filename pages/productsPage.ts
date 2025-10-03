import {expect, Locator, Page} from "@playwright/test";
import { BasePage } from "./basePage";
import { Homepage } from "./homepage";

export class ProductsPage extends BasePage {

    private allProductsHeading: Locator
    private searchField: Locator
    private searchButton: Locator
    private pageHeading: Locator
    private viewProductLinkLocators: Locator
  

    constructor(page: Page){
        super(page)
        this.allProductsHeading = page.getByRole('heading', { name: 'All Products' })
        this.searchField = page.getByRole('textbox', { name: 'Search Product' })
        this.searchButton = page.getByRole('button', { name: '' })
        this.pageHeading = page.locator("h2[class='title text-center']")
        this.viewProductLinkLocators = page.locator("div[class='choose'] ul[class='nav nav-pills nav-justified']")
    }

    async verifyAllProductsPage():Promise<void>{
        await this.allProductsHeading.isVisible()
        expect (this.allProductsHeading).toHaveText('All Products')
    }

    async searchForProduct(productName: string):Promise<void>{
        await this.searchField.fill(productName)
        await this.searchButton.click()

    }
    async verifyCommonProductsHeading(text: string):Promise<void>{
        await this.pageHeading.isVisible()
        expect (this.pageHeading).toHaveText(text)
    }
    async clickOnViewProduct(number: number):Promise<void>{
        await this.viewProductLinkLocators.nth(number).click()
    }   
}