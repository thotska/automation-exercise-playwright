import {Locator, Page, expect} from "@playwright/test"
import { BasePage } from "./basePage";

export class PaymentPage extends BasePage {
    private nameOnCardField: Locator
    private cardNumberField: Locator
    private cvcField: Locator
    private expiryMonthField: Locator
    private expiryYearField: Locator
    private payAndConfirmOrderButton: Locator
    protected orderPlacedSuccessMessage: Locator

    constructor(page: Page) {
        super(page);
        this.nameOnCardField = page.locator('input[name="name_on_card"]')
        this.cardNumberField = page.locator('input[name="card_number"]')
        this.cvcField = page.getByRole('textbox', { name: 'ex.' })
        this.expiryMonthField = page.getByRole('textbox', { name: 'MM' })
        this.expiryYearField = page.getByRole('textbox', { name: 'YYYY' })
        this.payAndConfirmOrderButton = page.getByRole('button', { name: 'Pay and Confirm Order' })
        this.orderPlacedSuccessMessage = page.getByRole('heading', { name: 'Order Placed!' })
    }

    async enterPaymentDetails(nameOnCard: string, cardNumber: string, cvc: string, expiryMonth: string, expiryYear: string): Promise<void> {
        await this.nameOnCardField.fill(nameOnCard)
        await this.cardNumberField.fill(cardNumber)
        await this.cvcField.fill(cvc)
        await this.expiryMonthField.fill(expiryMonth)
        await this.expiryYearField.fill(expiryYear)
    }
    async clickOnPayAndConfirmOrderButton(): Promise<void> {
        await this.payAndConfirmOrderButton.click()
    }
    async verifyOrderPlacedSuccessMessage(): Promise<void> {
        await expect(this.orderPlacedSuccessMessage).toBeVisible()
        await expect(this.orderPlacedSuccessMessage).toHaveText('Order Placed!')
        
    }
}