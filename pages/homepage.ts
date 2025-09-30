import {expect, Locator, Page} from "@playwright/test"
import { BasePage } from "./basePage"

export class Homepage extends BasePage {

    private mainTitle: Locator

    constructor(page: Page){
        super(page)
        this.mainTitle = page.locator('div[class="logo pull-left"] img')
    }
    async verifyHomePage(){
        await expect(this.mainTitle).toBeVisible()
    }
    async clickOnTestCasesLink():Promise<void>{
        await this.page.getByRole('button', { name: 'Test Cases' }).click()
    }
}