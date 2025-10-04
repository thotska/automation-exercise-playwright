import {Locator, Page, expect} from "@playwright/test"
import { BasePage } from "./basePage";

export class CartPage extends BasePage {
    private cartPageTitle: Locator
    closeSymbolLocator: Locator
    emptyCartMessage: Locator
    productsInCartVisibleLocator: Locator
    
    constructor(page: Page) {
        super(page)
        this.cartPageTitle = page.locator('ol[class="breadcrumb"]')
        this.closeSymbolLocator = page.locator('a[class="cart_quantity_delete"]')
        this.emptyCartMessage = page.locator('span[id="empty_cart"]')
        this.productsInCartVisibleLocator = page.getByRole('row', { name: 'Product Image Blue Top Women' })
    }
    async verifyCartPage(): Promise<void> {
        await expect(this.cartPageTitle).toBeVisible()
        await expect(this.cartPageTitle).toContainText('Cart')
    }
    async removeAllProductsFromCart(): Promise<void> {
        while (await this.closeSymbolLocator.count() > 0) {
            await this.closeSymbolLocator.first().click({delay: 500});
            
        }
}
async verifyNoProductsAreInCart(): Promise<void> {
    await expect(this.emptyCartMessage).toBeVisible()
    await expect(this.emptyCartMessage).toContainText('Cart is empty!')
}
async verifyProductsAreInCart(): Promise<void> {
    await expect(this.productsInCartVisibleLocator).toBeVisible()
}
}