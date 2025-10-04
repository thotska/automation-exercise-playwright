import {expect, Locator, Page} from "@playwright/test";
import { BasePage } from "./basePage";
import { Homepage } from "./homepage";
import { SearchedProductsPage } from "./searchedProductsPage";

export class ContactUsPage extends BasePage {
    private getInTouchHeading: Locator
    private nameField: Locator
    private emailField: Locator
    private subjectField: Locator
    private messageField: Locator
    private uploadFileButton: Locator
    private submitButton: Locator
    protected successMessageContactUs: Locator

    constructor(page: Page){
        super(page)
        this.getInTouchHeading = page.getByRole('heading', { name: 'Get In Touch' })
        this.nameField = page.getByRole('textbox', { name: 'Name' })
        this.emailField = page.getByRole('textbox', { name: 'Email', exact: true })
        this.subjectField = page.getByRole('textbox', { name: 'Subject' })
        this.messageField = page.getByRole('textbox', { name: 'Your Message Here' })
        this.uploadFileButton = page.getByRole('button', { name: 'Choose File' })
        this.submitButton = page.getByRole('button', { name: 'Submit' })
        this.successMessageContactUs = page.locator('div[class="status alert alert-success"]')

    }
    async verifyContactUsPage():Promise<void>{
        await this.getInTouchHeading.isVisible()
        await expect(this.getInTouchHeading).toContainText('Get In Touch')
    }
    async fillContactUsForm(name: string, email: string, subject: string, message: string, filePath: string):Promise<void>{
        await this.nameField.fill(name)
        await this.emailField.fill(email)
        await this.subjectField.fill(subject)
        await this.messageField.fill(message)
        await this.uploadFileButton.setInputFiles(filePath)
        await this.submitButton.click()
        
    }
    async verifyContactUsPageSuccessMessage():Promise<void>{
        await expect(this.successMessageContactUs).toBeVisible()
        await expect(this.successMessageContactUs).toHaveText('Success! Your details have been submitted successfully.')
}
    async clickONAlertOkButton():Promise<void>{
        await this.page.on('dialog', dialog => dialog.accept());
}
}