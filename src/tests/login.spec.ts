import { test, expect } from 'playwright/test'
import { LoginPage } from '../pages/login.page'
import { DashboardPage } from '../pages/dashboard.page'

test('Verify login successful', async ({ page }) => {
  const loginPage = new LoginPage(page)
  const dashboardPage = new DashboardPage(page)

  await loginPage.goto()
  await loginPage.doLogin('admin', 'admin123')
  await expect(dashboardPage.pageTitleLabel).toHaveText('Dashboard')
})
