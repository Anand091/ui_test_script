import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async gotoLoginPage() {
    await this.navigate(TestData.baseURL);
  }

  async login(username: string, password: string) {
    await this.page.getByRole('textbox', { name: 'something like this example@' }).fill(username);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }
}
