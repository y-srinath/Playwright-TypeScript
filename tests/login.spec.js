import { test, expect } from "@playwright/test";

test("Login Test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  // Validate page title
  await expect(page).toHaveTitle(/Swag Labs/);

  // Find the username input field
  const usernameInput = page.locator("#user-name");

  // Fill in the username
  await usernameInput.fill("standard_user");

  // Find the password input field
  const passwordInput = page.locator("#password");

  // Fill in the password
  await passwordInput.fill("secret_sauce");

  // Find the login button
  const loginButton = page.locator("#login-button");

  // Click the login button
  await loginButton.click();
});
