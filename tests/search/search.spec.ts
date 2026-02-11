import { test, expect } from '../../fixtures/pages';

test.describe('Search', () => {
  // Search for NBA, verify dropdown and clear button, then unfocus
  test('@smoke should show search dropdown with results and hide on unfocus', async ({
    homePage,
  }) => {
    // Act - type search query
    await homePage.searchFor('NBA');

    // Assert - dropdown with results is visible
    await expect(homePage.searchDropdown).toBeVisible({ timeout: 10000 });
    await expect(homePage.searchResults.first()).toBeVisible();

    // Assert - clear button is visible inside search
    await expect(homePage.searchClearButton).toBeVisible();

    // Act - click outside search to unfocus
    await homePage.clickOutsideSearch();

    // Assert - dropdown and clear button are no longer visible
    await expect(homePage.searchDropdown).not.toBeVisible();
    await expect(homePage.searchClearButton).not.toBeVisible();
  });
});
