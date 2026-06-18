import { test, expect } from "@playwright/test";

test("my test", async ({ page }) => {
  await page.goto("https://google.com");
  const title = await page.title();
  expect(title).toBe("Google");
});
