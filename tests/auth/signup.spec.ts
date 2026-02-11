import { test, expect } from '../../fixtures/pages';

test.describe('Sign Up Page', () => {
  // Case 1: Navigate to signup from homepage and verify form fields
  test('@smoke should open signup page and display all form fields', async ({
    homePage,
    signupPage,
    page,
  }) => {
    // Act
    await homePage.clickSignUp();

    // Assert
    await expect(page).toHaveURL(/\/signup/);
    await signupPage.isLoaded();
  });

  // Case 2: Submit empty form and verify validation messages
  test('@smoke should show validation messages when submitting empty form', async ({
    signupPage,
    page,
  }) => {
    // Arrange — navigate directly to signup
    await page.goto('/signup');
    await signupPage.isLoaded();

    // Act
    await signupPage.clickSignUp();

    // Assert - validation messages for required fields (7 total):
    // email, password, firstName, lastName, companyName, typeSelector, terms
    // businessWebsite is NOT required
    await signupPage.expectValidationMessagesVisible(6);
  });

  // Case 3: Navigate from signup to login page
  test('@smoke should navigate to login page from signup', async ({
    signupPage,
    loginPage,
    page,
  }) => {
    // Arrange — navigate directly to signup
    await page.goto('/signup');
    await signupPage.isLoaded();

    // Act
    await signupPage.clickLogin();

    // Assert
    await expect(page).toHaveURL(/\/login/);
    await loginPage.isLoaded();
  });
});
