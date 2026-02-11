import { test, expect } from '../../fixtures/pages';

test.describe('Navigation', () => {
  test.describe('Header Pages', () => {
    // Navigate to For Agencies page
    test('@smoke should navigate to For Agencies page', async ({
      homePage,
      forAgenciesPage,
      page,
    }) => {
      // Act
      await homePage.clickForAgencies();

      // Assert
      await expect(page).toHaveURL(/\/for-agencies/);
      await forAgenciesPage.isLoaded();
    });

    // Navigate to For Brand Owners page
    test('@smoke should navigate to For Brand Owners page', async ({
      homePage,
      forBrandOwnersPage,
      page,
    }) => {
      // Act
      await homePage.clickForBrandOwners();

      // Assert
      await expect(page).toHaveURL(/\/for-brand-owners/);
      await forBrandOwnersPage.isLoaded();
    });
  });

  test.describe('Explore Menu', () => {
    // Case 5: Navigate to Marketplace via Explore menu
    test('@smoke should navigate to Marketplace via Explore menu', async ({
      homePage,
      marketplacePage,
      page,
    }) => {
      // Act
      await homePage.navigateToMarketplace();

      // Assert
      await expect(page).toHaveURL(/\/marketplace/);
      await marketplacePage.isLoaded();
    });

    // Case 6: Navigate to Explore Opportunities via Explore menu
    test('@smoke should navigate to Explore Opportunities via Explore menu', async ({
      homePage,
      exploreOpportunitiesPage,
      page,
    }) => {
      // Act
      await homePage.navigateToExploreOpportunities();

      // Assert
      await expect(page).toHaveURL(/\/explore-opportunities/);
      await exploreOpportunitiesPage.isLoaded();
    });

    // Case 7: Navigate to Pricing via Explore menu
    test('@smoke should navigate to Pricing via Explore menu', async ({
      homePage,
      pricingPage,
      page,
    }) => {
      // Act
      await homePage.navigateToPricing();

      // Assert
      await expect(page).toHaveURL(/\/pricing/);
      await pricingPage.isLoaded();
    });
  });

  test.describe('Logo Navigation', () => {
    // Case 8: Navigate back to homepage from login page via logo
    test('@smoke should navigate back to homepage from login page via logo', async ({
      homePage,
      loginPage,
      page,
    }) => {
      // Act - go to login
      await homePage.clickLogin();
      await expect(page).toHaveURL(/\/login/);
      await loginPage.isLoaded();

      // Act - click logo to return to homepage
      await loginPage.clickLogo();

      // Assert - back on homepage
      await expect(page).toHaveURL(/negosh\.com\/?$/);
      await homePage.isLoaded();
    });

    // Case 9: Navigate back to homepage from signup page via logo
    test('@smoke should navigate back to homepage from signup page via logo', async ({
      homePage,
      signupPage,
      page,
    }) => {
      // Act - go to signup
      await homePage.clickSignUp();
      await expect(page).toHaveURL(/\/signup/);
      await signupPage.isLoaded();

      // Act - click logo to return to homepage
      await signupPage.clickLogo();

      // Assert - back on homepage
      await expect(page).toHaveURL(/negosh\.com\/?$/);
      await homePage.isLoaded();
    });
  });
});
