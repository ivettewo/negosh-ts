import { test, expect } from '../../fixtures/pages';

test.describe('Login Page', () => {
  // Case 4: Navigate to login from homepage
  test('@smoke should open login page from homepage', async ({
    homePage,
    loginPage,
    page,
  }) => {
    // Act
    await homePage.clickLogin();

    // Assert
    await expect(page).toHaveURL(/\/login/);
    await loginPage.isLoaded();
  });
});
