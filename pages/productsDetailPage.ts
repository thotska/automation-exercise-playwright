import {Locator, Page, expect} from "@playwright/test"
import { ProductsPage } from "./productsPage";
import { BasePage } from "./basePage";

export class ProductsDetailPage extends BasePage {
    private writeYourReviewTitle: Locator
    private nameField: Locator
    private emailField: Locator
    private reviewField: Locator
    private submitButton: Locator
    protected reviewSuccessMessage: Locator

    constructor(page: Page){
        super(page)
        this.writeYourReviewTitle = page.locator("li[class='active'] a")
        this.nameField = page.getByRole('textbox', { name: 'Your Name' })
        this.emailField = page.getByRole('textbox', { name: 'Email Address', exact: true })
        this.reviewField = page.getByRole('textbox', { name: 'Add Review Here!' })
        this.submitButton = page.getByRole('button', { name: 'Submit' })
        this.reviewSuccessMessage = page.getByText('Thank you for your review.')
    }
    async verifyWriteYourReviewTitle():Promise<void>{
        await expect(this.writeYourReviewTitle).toBeVisible()
        await expect(this.writeYourReviewTitle).toHaveText('Write Your Review')
    }
    async fillReviewForm(name: string, email: string, review: string):Promise<void>{
        await this.nameField.fill(name)
        await this.emailField.fill(email)
        await this.reviewField.fill(review)
        await this.submitButton.click()
    }
    async verifySuccessMessage():Promise<void>{
        await expect(this.reviewSuccessMessage).toBeVisible()
        await expect(this.reviewSuccessMessage).toHaveText('Thank you for your review.')
    }
}
