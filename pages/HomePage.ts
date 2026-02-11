import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  // Navigation buttons (desktop)
  readonly signUpButton: Locator;
  readonly loginButton: Locator;
  readonly exploreMenuButton: Locator;

  // Header navigation links (desktop, scoped to <header>)
  readonly forAgenciesLink: Locator;
  readonly forBrandOwnersLink: Locator;

  // Explore menu links
  readonly marketplaceLink: Locator;
  readonly exploreOpportunitiesLink: Locator;
  readonly pricingLink: Locator;

  // Search
  readonly searchInput: Locator;
  readonly searchDropdown: Locator;
  readonly searchClearButton: Locator;
  readonly searchResults: Locator;

  // Hero section (used for unfocus clicks)
  readonly heroText: Locator;

  // Mobile
  readonly mobileMenuButton: Locator;
  readonly mobileDrawer: Locator;

  constructor(page: Page) {
    super(page);
    this.signUpButton = page.locator('a[data-testid="signup-button"]');
    this.loginButton = page.locator('a[data-testid="login-button"]');
    this.exploreMenuButton = page.locator('button[data-testid="explore-menu-button"]');
    this.forAgenciesLink = page.locator('header').getByRole('link', { name: 'For agencies', exact: true });
    this.forBrandOwnersLink = page.locator('header').getByRole('link', { name: 'For brand owners', exact: true });
    this.marketplaceLink = page.locator('a[data-testid="marketplace-link"]');
    this.exploreOpportunitiesLink = page.locator('a[data-testid="explore-opportunities-link"]');
    this.pricingLink = page.locator('a[data-testid="pricing-link"]');

    // Search elements
    this.searchInput = page.locator('input[data-testid="search-brands-field"]');
    this.searchDropdown = page.locator('[role="listbox"]');
    this.searchClearButton = page.getByRole('button', { name: 'Clear', exact: true });
    this.searchResults = page.locator('[role="option"]');
    this.heroText = page.getByText('License brands for your products.');

    // Mobile
    this.mobileMenuButton = page.locator('button[data-testid="mobile-menu-button"]');
    this.mobileDrawer = page.locator('.MuiDrawer-paper');
  }

  async isLoaded(): Promise<void> {
    if (this.isMobile()) {
      await expect(this.mobileMenuButton).toBeVisible();
    } else {
      await expect(this.signUpButton).toBeVisible();
      await expect(this.exploreMenuButton).toBeVisible();
    }
  }

  async openMobileMenu(): Promise<void> {
    await this.mobileMenuButton.click();
    await this.mobileDrawer.waitFor({ state: 'visible' });
  }

  // --- Auth navigation ---

  async clickSignUp(): Promise<void> {
    if (this.isMobile()) {
      await this.openMobileMenu();
      await this.mobileDrawer.locator('a[data-testid="signup-button"]').click();
    } else {
      await this.signUpButton.click();
    }
  }

  async clickLogin(): Promise<void> {
    if (this.isMobile()) {
      await this.openMobileMenu();
      await this.mobileDrawer.locator('a[data-testid="login-button"]').click();
    } else {
      await this.loginButton.click();
    }
  }

  // --- Page navigation ---

  async clickForAgencies(): Promise<void> {
    if (this.isMobile()) {
      await this.openMobileMenu();
      await this.mobileDrawer.locator('a[data-testid="for-agencies-link"]').click();
    } else {
      await this.forAgenciesLink.click();
    }
  }

  async clickForBrandOwners(): Promise<void> {
    if (this.isMobile()) {
      await this.openMobileMenu();
      await this.mobileDrawer.locator('a[href="/for-brand-owners"]').click();
    } else {
      await this.forBrandOwnersLink.click();
    }
  }

  // --- Explore menu navigation ---

  async openExploreMenu(): Promise<void> {
    await this.exploreMenuButton.click();
  }

  async navigateToMarketplace(): Promise<void> {
    if (this.isMobile()) {
      await this.openMobileMenu();
      await this.mobileDrawer.locator('a[data-testid="marketplace-link"]').click();
    } else {
      await this.openExploreMenu();
      await this.marketplaceLink.click();
    }
  }

  async navigateToExploreOpportunities(): Promise<void> {
    if (this.isMobile()) {
      await this.openMobileMenu();
      await this.mobileDrawer
        .locator('a[data-testid="explore-opportunities-link"]')
        .click();
    } else {
      await this.openExploreMenu();
      await this.exploreOpportunitiesLink.click();
    }
  }

  async navigateToPricing(): Promise<void> {
    if (this.isMobile()) {
      await this.openMobileMenu();
      await this.mobileDrawer.locator('a[data-testid="pricing-link"]').click();
    } else {
      await this.openExploreMenu();
      await this.pricingLink.click();
    }
  }

  // --- Search ---

  async searchFor(query: string): Promise<void> {
    await this.searchInput.click();
    await this.searchInput.fill(query);
  }

  async clickOutsideSearch(): Promise<void> {
    // Close dropdown overlay first, then click outside to blur the input
    await this.page.keyboard.press('Escape');
    await this.heroText.click();
  }
}
