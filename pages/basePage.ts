import {Locator, Page} from "@playwright/test"


export class BasePage {
     page: Page 
    private topNavigationBarLocators: Locator

    constructor(page: Page){
        this.page = page
        this.topNavigationBarLocators = page.locator('ul[class="nav navbar-nav"] li')

    }

    async clickOnNavigationLink(linkText: string){
        await this.topNavigationBarLocators.getByText(linkText).click()
    }
}