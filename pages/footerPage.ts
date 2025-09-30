import{Locator, Page, expect} from "@playwright/test"
import { BasePage } from "./basePage";

export class FooterPage extends BasePage {

    private footerText: Locator
    private emailAddressField: Locator
    private arrowButton: Locator
    private successMessage: Locator

    constructor(page: Page){
        super(page)
        this.footerText = page.getByRole('heading', { name: 'Subscription' })
        this.emailAddressField = page.getByRole('textbox', { name: 'Your email address' })
        this.arrowButton = page.getByRole('button', { name: '' })
        this.successMessage = page.getByText('You have been successfully subscribed!')}
    
        async verifyFooterText():Promise<void>{
            await expect (this.footerText).toBeVisible()
            await expect (this.footerText).toHaveText('Subscription')
        }
        async enterEmailAndClickArrow(email: string):Promise<void>{
            await this.emailAddressField.fill(email)
            await this.arrowButton.click()
        }

        async verifySuccessMessage():Promise<void>{
            await expect(this.successMessage).toBeVisible()
            await expect(this.successMessage).toHaveText('You have been successfully subscribed!')
        }
    }
