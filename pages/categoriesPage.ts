import {Locator, Page, expect} from "@playwright/test"
import { BasePage } from "./basePage";

export class CategoriesPage extends BasePage {
    private header: Locator

    constructor(page: Page) {
        super(page)
        this.header = page.locator('h2[class="title text-center"]')
    }


    async verifyHeader(text: string): Promise<void> {
        await this.header.isVisible()
        await expect(this.header).toHaveText(text)
    }
    }