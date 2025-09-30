import{Locator, Page,expect} from "@playwright/test"
import { BasePage } from "./basePage";

export class SignUpLoginPage extends BasePage {

    private signUpTitle: Locator
    private readonly expectedSignUpTitleText: string = 'New User Signup!'
    private nameInput: Locator
    private emailInput: Locator
    private signupButton: Locator
 

    constructor(page: Page){
        super(page)
        this.signUpTitle = page.getByRole('heading', { name: 'New User Signup!' })
        this.nameInput = page.getByRole('textbox', { name: 'Name' })
        this.emailInput = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')
        this.signupButton = page.getByRole('button', { name: 'Signup' })
    }
    async validateSignUpTitle():Promise<void>{
        await expect(this.signUpTitle).toBeVisible()
        await expect(this.signUpTitle).toHaveText(this.expectedSignUpTitleText)
    }
    async signUpWithEmailAndName(name: string, email: string):Promise<void>{
        await this.nameInput.fill(name)
        await this.emailInput.fill(email)
        await this.signupButton.click()
    }}