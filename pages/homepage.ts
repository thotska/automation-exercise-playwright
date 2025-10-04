import { expect, Locator, Page } from "@playwright/test"
import { BasePage } from "./basePage"

export class Homepage extends BasePage {

    private mainTitle: Locator
    private categoriesLocator: Locator
    private womenCategoryLink: Locator
    private womenDressLink: Locator
    private menCategoryLink: Locator
    private menJeansLink: Locator
    private brandTitle: Locator
    private brandLinksLocator: Locator
    private recommendedItemsTitle: Locator
    private recommendedItemsProducts: Locator
    private viewCartButton: Locator
    private arrowToScrollUp: Locator
    private subtitle: Locator


    constructor(page: Page) {
        super(page)
        this.mainTitle = page.locator('div[class="logo pull-left"] img')
        this.subtitle = page.locator('div[class="item active"] div[class="col-sm-6"] h2')
        this.categoriesLocator = page.locator('div[id="accordian"]')
        this.womenCategoryLink = page.getByRole('link', { name: ' Women' })
        this.womenDressLink = page.getByRole('link', { name: 'Dress' })
        this.menCategoryLink = page.getByRole('link', { name: ' Men' })
        this.menJeansLink = page.getByRole('link', { name: 'Jeans' })
        this.brandTitle = page.getByRole('heading', { name: 'Brands' })
        this.brandLinksLocator = page.locator('div[class="brands-name"] ul li')
        this.recommendedItemsTitle = page.getByRole('heading', { name: 'recommended items' })
        this.recommendedItemsProducts = page.locator('div[class="carousel-inner"] a[class="btn btn-default add-to-cart"]')
        this.viewCartButton = page.getByRole('link', { name: 'View Cart' })
        this.arrowToScrollUp = page.getByRole('link', { name: '' })
        
    }
    async verifyHomePage() {
        await expect(this.mainTitle).toBeVisible()
    }
    async clickOnTestCasesLink(): Promise<void> {
        await this.page.getByRole('button', { name: 'Test Cases' }).click()
    }

    async scrollToBottom() {
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    }
    async verifyCategoriesVisible(): Promise<void> {
        await expect(this.categoriesLocator).toBeVisible()
    }
    async clickOnWomenCategoryDress(): Promise<void> {
        await this.womenCategoryLink.click()
        await this.womenDressLink.click()
    }
    async clickOnMenCategoryJeans(): Promise<void> {
        await this.menCategoryLink.click()
        await this.menJeansLink.click()
    }
    async verifyBrandsVisible(): Promise<void> {
        await expect(this.brandTitle).toBeVisible()
        await expect(this.brandTitle).toHaveText('Brands')
    }
    async clickBrandName(brandName: string): Promise<void> {
        await this.brandLinksLocator.getByText(brandName).click()
    }
    async verifyRecommendedItemsVisible(): Promise<void> {
        await expect(this.recommendedItemsTitle).toBeVisible()
        await expect(this.recommendedItemsTitle).toHaveText('recommended items')
    }
    async clickOnAddToCartOfRecommendedItems(number: number): Promise<void> {
        await this.recommendedItemsProducts.nth(number).click()
    }
    async clickOnViewCartButton(): Promise<void> {
        await this.viewCartButton.click()
    }
    async clickONArrowToScrollUp(): Promise<void> {
        await this.arrowToScrollUp.click()
    }
    async verifySubtitle(): Promise<void> {
        await expect(this.subtitle).toBeVisible()
        await expect(this.subtitle).toHaveText('Full-Fledged practice website for Automation Engineers')
    }
}