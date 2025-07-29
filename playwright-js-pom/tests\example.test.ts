import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('Example Feature', () => {
  test('should login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('user', 'pass');
    await expect(page).toHaveTitle('Dashboard');
  });
});
