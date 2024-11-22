import { type Locator, type Page } from '@playwright/test'
import { BasePage } from './base.page'

export class DashboardPage extends BasePage {
  readonly pageTitleLabel: Locator

  constructor(page: Page) {
    super(page, '/web/index.php/dashboard/index')
    this.pageTitleLabel = page.locator('h6.oxd-text')
  }
}
