import {test} from '@playwright/test';
import {Homepage} from '../../pages/homepage';
import { BasePage } from '../../pages/basePage';
import { SearchedProductsPage } from '../../pages/searchedProductsPage';  
import { ContactUsPage } from '../../pages/contactUsPage';
import { ProductsPage } from '../../pages/productsPage';

test.describe('Submit message via Contact Us form ', async () => {
    let homePage: Homepage   
    let basePage: BasePage  
    let searchedProductsPage: SearchedProductsPage
    let contactUsPage: ContactUsPage
    let productsPage: ProductsPage
    test.beforeEach(async ({ page }) => {
        homePage = new Homepage(page)   
        basePage = new BasePage(page)
        searchedProductsPage = new SearchedProductsPage(page)
        contactUsPage = new ContactUsPage(page)
        productsPage = new ProductsPage(page)
    })

    test('Contact Us form submission and validation', async ({ page }) => {
    //1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    // 4. Click on 'Contact Us' button
    // 5. Verify 'GET IN TOUCH' is visible
    // 6. Enter name, email, subject and message
    // 7. Upload file
    // 8. Click 'Submit' button
    // 9. Click OK button
    // 10. Verify success message 'Success! Your details have been submitted successfully.' is visible
    // 11. Click 'Home' button and verify that landed to home page successfully
        await page.goto('process.env.baseurl!')
        await homePage.verifyHomePage()
        await basePage.clickOnNavigationLink("Contact us")
        await contactUsPage.verifyContactUsPage()
        await contactUsPage.fillContactUsForm('Test User', process.env.testemail!, 'Test Subject', 'This is a test message.','C:\\Users\\thots\\Downloads\\download.jfif' )
        await contactUsPage.clickONAlertOkButton()
        await contactUsPage.verifyContactUsPageSuccessMessage()
    })
})  