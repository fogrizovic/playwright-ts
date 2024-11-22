import { Page } from '@playwright/test'

export class BasePage {
  protected readonly page: Page
  protected readonly relativePath: string

  constructor(page: Page, relativePath: string) {
    this.page = page
    this.relativePath = relativePath
  }

  async goto(params?: Record<string, string>) {
    let path = this.relativePath

    if (params) {
      for (const key in params) {
        path = path.replace(`:${key}`, params[key])
      }
    }

    await this.page.goto(path)
  }
}
