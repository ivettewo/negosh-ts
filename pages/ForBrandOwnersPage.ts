import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ForBrandOwnersPage extends BasePage {
  readonly pageHeading: Locator;

  constructor(page: Page) {
    super(page);
    this.pageHeading = page.getByText(
      'Your brand deserves better deals. Start finding them here.'
    );
  }

  async isLoaded(): Promise<void> {
    await expect(this.pageHeading).toBeVisible();
  }
}
