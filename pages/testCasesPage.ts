import {Locator, Page} from "@playwright/test"; 
import { BasePage } from "./basePage";
export class TestCasesPage extends BasePage {
    page: Page
    private testCasesHeading: Locator   

    constructor(page: Page){
        super(page)
        this.page = page
        this.testCasesHeading = page.getByRole('heading', { name: 'Test Cases', exact: true })
    }

    async verifyingTestCasesPage():Promise<void>{
        await this.testCasesHeading.isVisible()

    } 
}