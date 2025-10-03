import { Locator, Page, expect} from "@playwright/test"


export class BasePage {
    page: Page
    private topNavigationBarLocators: Locator
    private footerText: Locator
    private emailAddressField: Locator
    private arrowButton: Locator
    private successMessage: Locator

    constructor(page: Page) {
        this.page = page
        this.topNavigationBarLocators = page.locator('ul[class="nav navbar-nav"] li')
        this.footerText = page.getByRole('heading', { name: 'Subscription' })
        this.emailAddressField = page.getByRole('textbox', { name: 'Your email address' })
        this.arrowButton = page.getByRole('button', { name: '' })
        this.successMessage = page.getByText('You have been successfully subscribed!')
    }

    async verifyFooterText(): Promise<void> {
        await expect(this.footerText).toBeVisible()
        await expect(this.footerText).toHaveText('Subscription')
    }
    async enterEmailAndClickArrow(email: string): Promise<void> {
        await this.emailAddressField.fill(email)
        await this.arrowButton.click()
    }

    async verifySuccessMessage(): Promise<void> {
        await expect(this.successMessage).toBeVisible()
        await expect(this.successMessage).toHaveText('You have been successfully subscribed!')
    }
    async clickOnNavigationLink(linkText: string) {
        await this.topNavigationBarLocators.getByText(linkText).click()
    }
    async verifyLoginSuccessMessage(userName: string):Promise<void>{
        await expect(this.topNavigationBarLocators.getByText(`Logged in as ${userName}`)).toBeVisible()
    }
}
