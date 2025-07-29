import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class DashboardPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async openFundingRequest() {
    // Click on the Hamburger icon to expand the options
    await this.page.locator('img[alt="menu"]').click();

    // Click on the Funding Request option
    await this.page.getByRole('menuitem', { name: 'Funding Request' }).click();
  }

  async waitForDashboard() {
    // Wait for the dashboard to load. Adjust the selector as needed.
    await this.page.waitForSelector('button[name="add Upload New Invoice(s)"]');
  }
}