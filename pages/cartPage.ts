import {Locator, Page, expect} from "@playwright/test"
import { BasePage } from "./basePage";

export class CartPage extends BasePage {
    private cartPageTitle: Locator
    private closeSymbolLocator: Locator
    private emptyCartMessage: Locator
    private productsInCartVisibleLocator: Locator
    private proceedToCheckoutButton: Locator
    private deliveryAddressBox: Locator
    private yourBillingAddressBox: Locator
    private commentField: Locator
    private placeOrderButton: Locator
    
    
    constructor(page: Page) {
        super(page)
        this.cartPageTitle = page.locator('ol[class="breadcrumb"]')
        this.closeSymbolLocator = page.locator('a[class="cart_quantity_delete"]')
        this.emptyCartMessage = page.locator('span[id="empty_cart"]')
        this.productsInCartVisibleLocator = page.getByRole('row', { name: 'Product Image Blue Top Women' })
        this.proceedToCheckoutButton = page.locator('a[class="btn btn-default check_out"]')
        this.deliveryAddressBox = page.locator('ul[id="address_delivery"]')
        this.yourBillingAddressBox = page.locator('ul[id="address_invoice"]')
        this.commentField = page.locator('textarea[name="message"]')
        this.placeOrderButton = page.getByRole('link', { name: 'Place Order' })

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
async clickOnProceedToCheckoutButton(): Promise<void> {
    await this.proceedToCheckoutButton.click()
}
async verifyDeliveryAndBillingAddressBoxes(): Promise<void> {
    await expect(this.deliveryAddressBox).not.toBeEmpty()
    await expect(this.yourBillingAddressBox).not.toBeEmpty()

}
async enterCommentInCommentField(comment: string): Promise<void> {
    await this.commentField.fill(comment);
}
async clickOnPlaceOrderButton(): Promise<void> {
    await this.placeOrderButton.click();
}
}