import { test, Page } from '@playwright/test';
import { Homepage } from '../../pages/homepage';
import { BasePage } from '../../pages/basePage';
import { SignUpLoginPage } from '../../pages/signUpLoginPage';
import { CartPage } from '../../pages/cartPage';
import { faker } from '@faker-js/faker/locale/zu_ZA';
import { PaymentPage } from '../../pages/paymentPage';

test.describe('Login with invalid credentials Test, add items to cart and checkout', async () => {
    let homePage: Homepage
    let basePage: BasePage
    let signUpLoginPage: SignUpLoginPage
    let cartPage: CartPage
    let paymentPage: PaymentPage
    let page: Page
    test.beforeEach(async ({ page }) => {
        homePage = new Homepage(page)
        basePage = new BasePage(page)
        signUpLoginPage = new SignUpLoginPage(page)
        cartPage = new CartPage(page)
        paymentPage = new PaymentPage(page)
    })

    test('Login with valid credentials and verify success message', async ({ page }) => {
        await page.goto(process.env.baseURL!)
        await homePage.verifyHomePage()
        await homePage.clickOnNavigationLink("Signup / Login")
        await signUpLoginPage.validateLoginToYourAccountTitle()
        const testusername = process.env.testusername
        const password = process.env.password
        await signUpLoginPage.loginWithValidEmailAndPassword(testusername!, password!)
        await basePage.verifyLoginSuccessMessage(testusername!)
    })

    test('Login with invalid credentials Test, add items to cart and checkout', async ({ page }) => {
         //1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        // 3. Verify that home page is visible successfully
        // 4. Click 'Signup / Login' button
        // 5. Fill email, password and click 'Login' button
        // 6. Verify 'Logged in as username' at top
        // 7. Add products to cart
        // 8. Click 'Cart' button
        // 9. Verify that cart page is displayed
        // 10. Click Proceed To Checkout
        // 11. Verify Address Details and Review Your Order
        // 12. Enter description in comment text area and click 'Place Order'
        // 13. Enter payment details: Name on Card, Card Number, CVC, Expiration date
        // 14. Click 'Pay and Confirm Order' button
        // 15. Verify success message 'Your order has been placed successfully!'

        await page.goto(process.env.baseURL!)
        await homePage.verifyHomePage()
        await homePage.clickOnNavigationLink("Signup / Login")
        await signUpLoginPage.validateLoginToYourAccountTitle()
        const testemail = process.env.testemail
        const password = process.env.password
        await signUpLoginPage.loginWithValidEmailAndPassword(testemail!, password!)
        await basePage.verifyLoginSuccessMessage(testemail!);
        await homePage.clickOnAddToCartOfRecommendedItems(1);
        await homePage.clickOnViewCartButton()
        await cartPage.verifyCartPage()
        await cartPage.clickOnProceedToCheckoutButton()
        await cartPage.verifyDeliveryAndBillingAddressBoxes()
        await cartPage.enterCommentInCommentField('Please deliver between 9 AM to 5 PM')
        await cartPage.clickOnPlaceOrderButton()
        const nameOnCard = faker.person.fullName();
        const cardNumber = faker.finance.creditCardNumber({ issuer: 'visa' });
        const cvc = faker.finance.creditCardCVV();
        const expiryMonth = faker.number.int({ min: 1, max: 12 }).toString().padStart(2, '0');
        const expiryYear = (new Date().getFullYear() + 3).toString(); 
        await paymentPage.enterPaymentDetails(nameOnCard!, cardNumber!, cvc!, expiryMonth!, expiryYear!)
        await paymentPage.clickOnPayAndConfirmOrderButton()
        await paymentPage.verifyOrderPlacedSuccessMessage()
    })
})


