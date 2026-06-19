import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { read_CSV } from "../utils/CSV_Reader";

const loginData = read_CSV("test-data/login_data.csv");
console.log("Loaded CSV data:", loginData);
console.log("Number of rows:", loginData.length);

loginData.forEach((data: any) => {
  if (data.run !== "yes") return;

  test(`Login Test - ${data.username}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login(data.username, data.password);

    if (data.expected === "success") {
      await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    } else {
      await expect(loginPage.errorMessage).toBeVisible();
    }
  });
});
