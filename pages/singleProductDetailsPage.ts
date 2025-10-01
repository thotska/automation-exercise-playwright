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
    
    
    constructor(page: Page){
        super(page)
        this.productName = page.getByRole('heading', { name: 'Sleeveless Dress' })
        this.productCategory = page.getByText('Category: Women > Dress')
        this.productPrice = page.getByText('Rs.')
        this.productAvailability = page.getByText('Availability: In Stock')
        this.productCondition = page.getByText('Condition: New')
        this.productBrand = page.getByText('Brand: Madame')
    }

    async verifyProductDetails():Promise<void>{
        await this.productName.isVisible()
        await this.productCategory.isVisible()
        await this.productPrice.isVisible()
        await this.productAvailability.isVisible()
        await this.productCondition.isVisible()
        await this.productBrand.isVisible()
    }
}