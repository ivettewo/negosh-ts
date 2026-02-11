import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class SignupPage extends BasePage {
  // Form fields
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly companyNameInput: Locator;
  readonly businessWebsiteInput: Locator;
  readonly typeSelector: Locator;

  // Buttons and links
  readonly signUpButton: Locator;
  readonly loginLink: Locator;
  readonly logo: Locator;

  // Validation
  readonly validationMessages: Locator;
  readonly termsText: Locator;

  constructor(page: Page) {
    super(page);
    this.emailInput = page.locator('input[data-testid="email-input"]');
    this.passwordInput = page.locator('input[data-testid="password-input"]');
    this.firstNameInput = page.locator('input[data-testid="first-name-input"]');
    this.lastNameInput = page.locator('input[data-testid="last-name-input"]');
    this.companyNameInput = page.locator('input[data-testid="company-name-input"]');
    this.businessWebsiteInput = page.locator('input[data-testid="business-website-input"]');
    this.typeSelector = page.locator('[data-testid="role-input"]');

    this.signUpButton = page.locator('button[data-testid="signup-button"]');
    this.loginLink = page.getByRole('link', { name: 'Log in', exact: true });
    this.logo = page.getByRole('img', { name: 'Negosh logo', exact: true });

    this.validationMessages = page.getByText('Please fill out this field.');
    this.termsText = page.getByText(
      "I have read and accept Negosh's latest Terms of Use"
    );
  }

  async isLoaded(): Promise<void> {
    await expect(this.emailInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.firstNameInput).toBeVisible();
    await expect(this.lastNameInput).toBeVisible();
    await expect(this.companyNameInput).toBeVisible();
    await expect(this.businessWebsiteInput).toBeVisible();
    await expect(this.typeSelector).toBeVisible();
  }

  async clickSignUp(): Promise<void> {
    await this.signUpButton.click();
  }

  async clickLogin(): Promise<void> {
    await this.loginLink.click();
  }

  async clickLogo(): Promise<void> {
    await this.logo.click();
  }

  // Validation messages appear for all required fields (7 total):
  // email, password, firstName, lastName, companyName, typeSelector, terms
  // businessWebsite is NOT required
  async expectValidationMessagesVisible(expectedCount: number): Promise<void> {
    await expect(this.validationMessages).toHaveCount(expectedCount);
  }
}
