import { type Locator, type Page } from '@playwright/test'
import { BasePage } from './base.page'

export class LoginPage extends BasePage {
  private readonly usernameInput: Locator
  private readonly passwordInput: Locator
  private readonly loginButton: Locator

  constructor(page: Page) {
    super(page, '/web/index.php/auth/login')
    this.usernameInput = page.locator('[name="username"]')
    this.passwordInput = page.locator('[name="password"]')
    this.loginButton = page.locator('.orangehrm-login-button')
  }

  async doLogin(username: string, password: string) {
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.loginButton.click()
  }
}
