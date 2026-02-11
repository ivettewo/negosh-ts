import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class PricingPage extends BasePage {
  readonly faqHeading: Locator;
  readonly talkToSalesButton: Locator;

  constructor(page: Page) {
    super(page);
    this.faqHeading = page.getByText('Frequently asked questions');
    this.talkToSalesButton = page.getByRole('button', { name: 'Talk to sales', exact: true });
  }

  async isLoaded(): Promise<void> {
    await expect(this.faqHeading).toBeVisible();
    await expect(this.talkToSalesButton).toBeVisible();
  }
}
