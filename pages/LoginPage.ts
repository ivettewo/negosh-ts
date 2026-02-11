import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly logo: Locator;

  constructor(page: Page) {
    super(page);
    this.emailInput = page.locator('input[data-testid="email-input"]');
    this.passwordInput = page.locator('input[data-testid="password-input"]');
    this.loginButton = page.locator('button[data-testid="login-button"]');
    this.logo = page.getByRole('img', { name: 'Negosh', exact: true });
  }

  async isLoaded(): Promise<void> {
    await expect(this.emailInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }

  async clickLogin(): Promise<void> {
    await this.loginButton.click();
  }

  async clickLogo(): Promise<void> {
    await this.logo.click();
  }
}
