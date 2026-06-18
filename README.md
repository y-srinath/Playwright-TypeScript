# Playwright-TypeScript 🎭

A test automation framework built with **Playwright** and **TypeScript**, featuring end-to-end UI tests, cross-browser testing, and Page Object Model architecture.

---

## 🛠️ Tech Stack

- Playwright
- TypeScript / JavaScript
- Node.js
- Page Object Model (POM)
- Playwright Test Runner

---

## 📁 Project Structure

```
Playwright-TypeScript/
│
├── tests/                   # Test files
│   ├── login.spec.ts
│   └── my_test.spec.js
│
├── pages/                   # Page Object classes
│   ├── login_page.ts
│   └── home_page.ts
│
├── playwright.config.ts     # Playwright configuration
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Setup & Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/y-srinath/Playwright-TypeScript.git
cd Playwright-TypeScript
```

### 2. Install dependencies
```bash
npm install
```

### 3. Install Playwright browsers
```bash
npx playwright install
```

---

## 🚀 Running Tests

```bash
# Run all tests
npx playwright test

# Run a specific test file
npx playwright test tests/login.spec.ts

# Run tests in a specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

# Run tests in headed mode (see browser)
npx playwright test --headed

# Run tests in debug mode
npx playwright test --debug

# Run tests in UI mode
npx playwright test --ui
```

---

## 📊 Reports

After test execution, view the HTML report:

```bash
npx playwright show-report
```

---

## 🌐 Browser Support

| Browser | Supported |
|---------|-----------|
| Chromium | ✅ |
| Firefox  | ✅ |

---

## 🔑 Key Features

- **Cross-Browser Testing** — runs on Chromium, Firefox, and WebKit
- **Auto-Waiting** — Playwright automatically waits for elements to be ready
- **Page Object Model** — separates test logic from page interactions
- **Parallel Execution** — runs tests across multiple workers by default
- **Trace Viewer** — debug failing tests with detailed timeline
- **Screenshots & Videos** — automatic capture on failures

---

## 🧩 Example Test

```typescript
import { test, expect } from "@playwright/test";

test("Login Test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await expect(page).toHaveTitle(/Swag Labs/);

  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("secret_sauce");
  await page.locator("#login-button").click();

  await expect(page).toHaveURL(/inventory/);
});
```

---

## 👤 Author

**Srinath**
[GitHub](https://github.com/y-srinath)

---

## 📄 License

This project is for learning and practice purposes.
