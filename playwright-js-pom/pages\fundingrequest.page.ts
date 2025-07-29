import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class FundingRequestPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async selectEligibleInvoiceBatch() {
    // Assuming there is a way to identify eligible batches, e.g., by a specific text or ID
    // This is a placeholder, replace with the actual selector and logic
    await this.page.locator('div:has-text("Eligible Batch") input[type="checkbox"]').check();
  }

  async selectInvoiceBatchWithInvalidVesselId() {
    // TODO: Replace with actual selector for identifying invalid vessel ID batches
    await this.page.locator('div:has-text("Invalid Vessel ID Batch") input[type="checkbox"]').check();
  }

  async selectInvoiceBatchWithInvalidDueDate() {
    // TODO: Replace with actual selector for identifying invalid due date batches
    await this.page.locator('div:has-text("Invalid Due Date Batch") input[type="checkbox"]').check();
  }

  async selectAlreadyUsedInvoiceBatch() {
    // TODO: Replace with actual selector for identifying already used batches
    await this.page.locator('div:has-text("Already Used Batch") input[type="checkbox"]').check();
  }

  async initiateFundingRequest() {
    // Click on the Initiate Funding Request button
    await this.page.getByRole('button', { name: 'Initiate Funding Request' }).click();
  }
}