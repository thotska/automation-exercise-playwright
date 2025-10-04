import {Locator, Page, expect} from "@playwright/test";
import { BasePage } from "./basePage";

export class SearchedProductsPage extends BasePage {
    private searchedProductsTitle: Locator
    private allProductsVisibleLocator: Locator
    private viewProductLink: Locator
    private addToCardButton: Locator
    private productsInCart: Locator
    private continueShoppingButton: Locator


    constructor(page: Page){
        super(page)
    this.searchedProductsTitle = page.getByRole('heading', { name: 'Searched Products' })
    this.continueShoppingButton = page.getByRole('button', { name: 'Continue Shopping' })
    this.allProductsVisibleLocator = page.locator('div[class="features_items"] div[class="single-products"]')
    this.viewProductLink = page.locator('.nav.nav-pills.nav-justified > li > a').first() 
    this.addToCardButton = page.locator('div[class="productinfo text-center"] a')
    this.productsInCart = page.locator('div[class="table-responsive cart_info"] tr')
    this.continueShoppingButton = page.getByRole('button', { name: 'Continue Shopping' })
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
    async addAllProductsToCart():Promise<void>{
        for (let i = 0; i < await this.addToCardButton.count(); i++){
            await this.addToCardButton.nth(i).click()
            await this.page.waitForTimeout(2000);
            await this.continueShoppingButton.click()
        }
    }
    async addTenToCart():Promise<void>{
        for (let i = 0; i < 10; i++){
            await this.addToCardButton.nth(i).click()
            await this.continueShoppingButton.click()
        }
    }
    }
