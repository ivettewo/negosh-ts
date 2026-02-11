# Negosh UI Autotest Framework

Playwright + TypeScript + Page Object Model

> **CI/CD:** Tests run automatically on every push/PR to `main`.

> **Note:** Some locators (`.MuiDrawer-paper`) may be unstable. Prefer `data-testid` where possible.

---

## Project Structure

```
├── fixtures/pages.ts       # Custom Playwright fixtures
├── pages/                  # Page Object Model classes (9 files)
├── tests/                  # Test specs (auth, navigation, search)
├── manual-test-cases/      # Manual test specifications
└── playwright.config.ts    # Chromium + Mobile Chrome (Pixel 5)
```

---

## Running Tests

```bash
npm install                 # Install dependencies
npx playwright install      # Install browsers

npm test                    # Run all tests
npm run test:headed         # Run with visible browser
npm run test:ui             # Run in UI mode
npm run test:debug          # Run in debug mode
npm run test:report         # View HTML report
```

---

## Test Tags

- `@smoke` — current tests (navigation, auth flows)
- `@regression` — will be added when test suite grows

---

## Codegen (Generate Locators)

```bash
# Desktop
npx playwright codegen https://negosh.com

# Mobile (Pixel 5)
npx playwright codegen --device="Pixel 5" https://negosh.com
```
