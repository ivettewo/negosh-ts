import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ExploreOpportunitiesPage extends BasePage {
  readonly pageHeading: Locator;

  constructor(page: Page) {
    super(page);
    this.pageHeading = page.getByText('Explore opportunities');
  }

  async isLoaded(): Promise<void> {
    await expect(this.pageHeading.first()).toBeVisible();
  }
}
