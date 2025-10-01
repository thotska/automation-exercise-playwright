import {Locator, Page, expect} from "@playwright/test"
import { BasePage } from "./basePage";

export class CategoriesPage extends BasePage {
    private womenDressHeading: Locator
    private menJeansHeading: Locator

    constructor(page: Page) {
        super(page)
        this.womenDressHeading = page.locator('h2[class="title text-center"]')
        this.menJeansHeading = page.locator('h2[class="title text-center"]')
    }


    async verifyWomenDressPage(): Promise<void> {
        await this.womenDressHeading.isVisible()
        await expect(this.womenDressHeading).toHaveText('Women - Dress Products')
    }

    async verifyMenJeansPage(): Promise<void> {
        await this.menJeansHeading.isVisible()
        await expect(this.menJeansHeading).toHaveText('Men - Jeans Products')
    }
}