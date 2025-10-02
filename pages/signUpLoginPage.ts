import{Locator, Page,expect} from "@playwright/test"
import { BasePage } from "./basePage";

export class SignUpLoginPage extends BasePage {

    private signUpTitle: Locator
    private readonly expectedSignUpTitleText: string = 'New User Signup!'
    private nameInput: Locator
    private emailInput: Locator
    private signupButton: Locator
    private loginToYourAccountTitle: Locator
    private emailLoginInput: Locator
    private passwordLoginInput: Locator
    private loginButton: Locator
    private emailOrPasswordIncorrectMessage: Locator
 

    constructor(page: Page){
        super(page)
        this.signUpTitle = page.getByRole('heading', { name: 'New User Signup!' })
        this.nameInput = page.getByRole('textbox', { name: 'Name' })
        this.emailInput = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')
        this.signupButton = page.getByRole('button', { name: 'Signup' })
        this.loginToYourAccountTitle = page.getByRole('heading', { name: 'Login to your account' })
        this.emailLoginInput = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address')
        this.passwordLoginInput = page.getByRole('textbox', { name: 'Password' })
        this.loginButton = page.getByRole('button', { name: 'Login' })
        this.emailOrPasswordIncorrectMessage = page.locator('div[class="login-form"] p')
    }
    async validateSignUpTitle():Promise<void>{
        await expect(this.signUpTitle).toBeVisible()
        await expect(this.signUpTitle).toHaveText(this.expectedSignUpTitleText)
    }
    async signUpWithEmailAndName(name: string, email: string):Promise<void>{
        await this.nameInput.fill(name)
        await this.emailInput.fill(email)
        await this.signupButton.click()
    }

    async validateLoginToYourAccountTitle():Promise<void>{
        await expect (this.loginToYourAccountTitle).toBeVisible()
        await expect (this.loginToYourAccountTitle).toHaveText('Login to your account')
    }

    async loginWithInvalidEmailAndPassword(email: string, password: string):Promise<void>{
        await this.emailLoginInput.fill(email)
        await this.passwordLoginInput.fill(password)
        await this.loginButton.click()
    }
    async verifyEmailOrPasswordIncorrectMessage():Promise<void>{
        await expect(this.emailOrPasswordIncorrectMessage).toBeVisible()
        await expect(this.emailOrPasswordIncorrectMessage).toHaveText('Your email or password is incorrect!')
    }
}