import { test, expect, Locator } from "@playwright/test";

test("Login Test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  // Validate page title
  await expect(page).toHaveTitle(/Swag Labs/);

  // Find the username input field
  const usernameInput: Locator = page.locator("#user-name");

  // Fill in the username
  await usernameInput.fill("standard_user");

  // Find the password input field
  const passwordInput: Locator = page.locator("#password");

  // Fill in the password
  await passwordInput.fill("secret_sauce");

  // Find the login button
  const loginButton: Locator = page.locator("#login-button");

  // Click the login button
  await loginButton.click();
});
