import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { DashboardPage } from '../pages/dashboard.page';
import { FundingRequestPage } from '../pages/fundingrequest.page';
import { TestData } from '../utils/testData';

test.describe('Invoice Financing Portal - XBank', () => {
  let loginPage: LoginPage;
  let dashboardPage: DashboardPage;
  let fundingRequestPage: FundingRequestPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    fundingRequestPage = new FundingRequestPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login(TestData.username, TestData.password);
    await dashboardPage.waitForDashboard();
  });

  test('TC_XBANK_FR_001 - Create Funding Request with Eligible Invoice Batch', async ({ page }) => {
    await dashboardPage.openFundingRequest();

    // Select the eligible Invoice batch for creating the Funding Request
    // TODO: Replace with actual selector for identifying eligible batches
    await fundingRequestPage.selectEligibleInvoiceBatch();

    await fundingRequestPage.initiateFundingRequest();

    // Validate the confirmation message after submitting the Funding Request
    await expect(page.locator('text=Funding request submitted successfully')).toBeVisible();
  });

  test('TC_XBANK_FR_002 - Create Funding Request with Invoice Batch with Invalid Vessel ID', async ({ page }) => {
    await dashboardPage.openFundingRequest();

    // Select the Invoice batch with invalid vessel Id for creating the Funding Request
    // TODO: Replace with actual selector for identifying invalid vessel ID batches
    await fundingRequestPage.selectInvoiceBatchWithInvalidVesselId();

    await fundingRequestPage.initiateFundingRequest();

    // Validate the error message displayed for the invalid vessel Id
    // TODO: Replace with actual selector for the error message
    await expect(page.locator('text=Invalid Vessel ID Error Message')).toBeVisible();
  });

  test('TC_XBANK_FR_003 - Create Funding Request with Invoice Batch with Invalid Due Date', async ({ page }) => {
    await dashboardPage.openFundingRequest();

    // Select the Invoice batch with invalid due date for creating the Funding Request
    // TODO: Replace with actual selector for identifying invalid due date batches
    await fundingRequestPage.selectInvoiceBatchWithInvalidDueDate();

    await fundingRequestPage.initiateFundingRequest();

    // Validate the error message displayed for the invalid due date
    // TODO: Replace with actual selector for the error message
    await expect(page.locator('text=Invalid Due Date Error Message')).toBeVisible();
  });

  test('TC_XBANK_FR_004 - Create Funding Request with Already Used Invoice Batch', async ({ page }) => {
    await dashboardPage.openFundingRequest();

    // Select the already used Invoice batch for creating the Funding Request
    // TODO: Replace with actual selector for identifying already used batches
    await fundingRequestPage.selectAlreadyUsedInvoiceBatch();

    await fundingRequestPage.initiateFundingRequest();

    // Validate the error message displayed for the already used Invoice batch
    // TODO: Replace with actual selector for the error message
    await expect(page.locator('text=Already Used Invoice Batch Error Message')).toBeVisible();
  });
});