import { expect, Locator, Page } from "@playwright/test"; 
import { BasePage } from "./basePage";
import { Homepage } from "./homepage";

export class WomenDressPage extends BasePage {
    private womenDressHeading: Locator

    constructor(page: Page) {
        super(page)
        this.womenDressHeading = page.getByRole('heading', { name: 'Women - Dress Products' })
    }


    async verifyWomenDressPage(): Promise<void> {
        await this.womenDressHeading.isVisible()
        await expect(this.womenDressHeading).toHaveText('Women - Dress Products')
    }
}