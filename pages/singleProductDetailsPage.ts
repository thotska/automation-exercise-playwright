import {Locator, Page} from "@playwright/test";
import { BasePage } from "./basePage";  
import { Homepage } from "./homepage";
import { ProductsPage  } from "./productsPage";
import { SearchedProductsPage } from "./searchedProductsPage";

export class SingleProductDetailsPage extends BasePage {
    private productName: Locator
    private productCategory: Locator
    private productPrice: Locator
    private productAvailability: Locator
    private productCondition: Locator
    private productBrand: Locator
    private quantityField: Locator
    private addToCartButton: Locator
    private viewCartButton: Locator
    private productsQuantityInCart: Locator
    private productsDetailsSection: Locator
    
    
    constructor(page: Page){
        super(page)
        this.productName = page.getByRole('heading', { name: 'Sleeveless Dress' })
        this.productCategory = page.getByText('Category: Women > Dress')
        this.productPrice = page.getByText('Rs.')
        this.productAvailability = page.getByText('Availability: In Stock')
        this.productCondition = page.getByText('Condition: New')
        this.productBrand = page.getByText('Brand: Madame')
        this.quantityField = page.locator('#quantity')
        this.addToCartButton = page.getByRole('button', { name: ' Add to cart' })
        this.viewCartButton = page.getByRole('link', { name: 'View Cart' })
        this.productsQuantityInCart = page.locator('button[class="disabled"]')
        this.productsDetailsSection = page.locator('div[class="product-information"]')
        
    }

    async verifyProductDetails():Promise<void>{
        await this.productName.isVisible()
        await this.productCategory.isVisible()
        await this.productPrice.isVisible()
        await this.productAvailability.isVisible()
        await this.productCondition.isVisible()
        await this.productBrand.isVisible()
    }
    async verifyProductsDetailsSection():Promise<void>{
        await this.productsDetailsSection.isVisible()
    }
    async increaseProductQuantity(quantity: string):Promise<void>{
        await this.quantityField.fill(quantity)
        await this.addToCartButton.click()
        await this.viewCartButton.click()
    }
    async verifyExactProductsQuantityInCart(number: string):Promise<void>{
        await this.productsQuantityInCart.isVisible()
        
}
}