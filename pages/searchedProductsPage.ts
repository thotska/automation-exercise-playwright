import {Locator, Page, expect} from "@playwright/test";
import { BasePage } from "./basePage";

export class SearchedProductsPage extends BasePage {
    private searchedProductsTitle: Locator
    private allProductsVisibleLocator: Locator
    private viewProductLink: Locator
    private addToCardButton: Locator
    private productsInCart: Locator


    constructor(page: Page){
        super(page)
    this.searchedProductsTitle = page.getByRole('heading', { name: 'Searched Products' })
    this.allProductsVisibleLocator = page.locator('div[class="features_items"] div[class="single-products"]')
    this.viewProductLink = page.locator('.nav.nav-pills.nav-justified > li > a').first() 
    this.addToCardButton = page.locator('a[class="btn btn-default add-to-cart"]')
    this.productsInCart = page.locator('div[class="table-responsive cart_info"] tr')
    }
    async verifySearchedProductsPage():Promise<void>{
        await expect(this.searchedProductsTitle).toBeVisible()
        await expect(this.searchedProductsTitle).toHaveText('Searched Products')
    }

    async verifyAllProductsVisible():Promise<void>{
       for (let i = 0; i < await this.allProductsVisibleLocator.count(); i++){
        await expect(this.allProductsVisibleLocator.nth(i)).toBeVisible()
       }
    }    
    async clickOnViewProduct():Promise<void>{
        await this.viewProductLink.click()
    }       
    async clickOnAddToCart():Promise<void>{
        await this.addToCardButton.click()
    }
    async verifyingProductsInCart():Promise<void>{
        for (let i = 0; i < await this.productsInCart.count(); i++){
            await expect(this.productsInCart.nth(i)).toBeVisible()
           }
       }    
    }
