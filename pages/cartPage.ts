import {Locator, Page, expect} from "@playwright/test"
import { BasePage } from "./basePage";

export class CartPage extends BasePage {
    private cartPageTitle: Locator
    closeSymbolLocator: Locator
    emptyCartMessage: Locator
    
    constructor(page: Page) {
        super(page)
        this.cartPageTitle = page.locator('class="breadcrumb"')
        this.closeSymbolLocator = page.locator('a[class="cart_quantity_delete"]')
        this.emptyCartMessage = page.locator('span[id="empty_cart"]')
    }
    async verifyCartPage(): Promise<void> {
        await expect(this.cartPageTitle.innerText()).toBe('Shopping Cart') 
    }
    async removeAllProductsFromCart(): Promise<void> {
        for (let i = 0; i < 10; i++){
            await this.closeSymbolLocator.nth(0).click()
        }
}
async verifyNoProductsAreInCart(): Promise<void> {
    await expect(this.emptyCartMessage.innerText()).toBe('Cart is empty!')
}
}