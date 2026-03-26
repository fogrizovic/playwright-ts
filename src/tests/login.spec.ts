import { test, expect } from '../fixtures'

test('Verify login successful', async ({ loginPage, dashboardPage }) => {
  await loginPage.goto()
  await loginPage.doLogin('admin', 'admin123')
  await expect(dashboardPage.pageTitleLabel).toHaveText('Dashboard')
})
