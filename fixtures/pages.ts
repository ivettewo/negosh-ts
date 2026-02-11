import { test as base, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { SignupPage } from '../pages/SignupPage';
import { ForAgenciesPage } from '../pages/ForAgenciesPage';
import { ForBrandOwnersPage } from '../pages/ForBrandOwnersPage';
import { MarketplacePage } from '../pages/MarketplacePage';
import { ExploreOpportunitiesPage } from '../pages/ExploreOpportunitiesPage';
import { PricingPage } from '../pages/PricingPage';

type PageFixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  signupPage: SignupPage;
  forAgenciesPage: ForAgenciesPage;
  forBrandOwnersPage: ForBrandOwnersPage;
  marketplacePage: MarketplacePage;
  exploreOpportunitiesPage: ExploreOpportunitiesPage;
  pricingPage: PricingPage;
};

export const test = base.extend<PageFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await page.goto('/');
    await homePage.isLoaded();
    await use(homePage);
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  signupPage: async ({ page }, use) => {
    await use(new SignupPage(page));
  },

  forAgenciesPage: async ({ page }, use) => {
    await use(new ForAgenciesPage(page));
  },

  forBrandOwnersPage: async ({ page }, use) => {
    await use(new ForBrandOwnersPage(page));
  },

  marketplacePage: async ({ page }, use) => {
    await use(new MarketplacePage(page));
  },

  exploreOpportunitiesPage: async ({ page }, use) => {
    await use(new ExploreOpportunitiesPage(page));
  },

  pricingPage: async ({ page }, use) => {
    await use(new PricingPage(page));
  },
});

export { expect };
