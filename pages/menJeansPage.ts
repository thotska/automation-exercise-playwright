import {Locator, Page,expect}   from "@playwright/test";
import { BasePage } from "./basePage";

export class MenJeansPage extends BasePage {
    private menJeansHeading: Locator

    constructor(page: Page) {
        super(page)
        this.menJeansHeading = page.getByRole('heading', { name: 'Men - Jeans Products' })
    }

    async verifyMenJeansPage(): Promise<void> {
        await this.menJeansHeading.isVisible()
        await expect(this.menJeansHeading).toHaveText('Men - Jeans Products')
    }
}