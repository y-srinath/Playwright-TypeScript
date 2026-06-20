import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { read_Data } from "../utils/data_Reader";

// const test_Data = read_Data("./test-data/login_dynamic_data.json");
// const test_Data = read_Data("./test-data/login_data.csv");
const test_Data = read_Data("./test-data/login_data.xlsx", "Sheet1");

test.describe("Login Tests", () => {
  for (const data of test_Data) {
    // if (data.run !== 'yes') continue;

    test(`Login test for - ${data.username}`, async ({ page }) => {
      test.skip(data.run !== "yes", "Run Flag=NO");

      const loginPage = new LoginPage(page);

      await test.step("Go to login page", async () => {
        await loginPage.gotoLoginPage();
      });

      await test.step("Perform Login", async () => {
        await loginPage.login(data.username, data.password);
      });

      await test.step("Validate Result", async () => {
        if (data.expected === "success") {
          await expect(page).toHaveURL(
            "https://www.saucedemo.com/inventory.html",
          );
        } else {
          await expect(loginPage.errorMessage).toBeVisible();
        }
      });
    });
  }
});
