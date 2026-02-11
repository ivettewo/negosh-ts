import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class MarketplacePage extends BasePage {
  readonly brandCards: Locator;
  readonly viewButtons: Locator;

  constructor(page: Page) {
    super(page);
    this.brandCards = page.locator('.MuiCard-root');
    this.viewButtons = page.getByRole('link', { name: 'View', exact: true });
  }

  async isLoaded(): Promise<void> {
    await expect(this.viewButtons.first()).toBeVisible();
  }
}
