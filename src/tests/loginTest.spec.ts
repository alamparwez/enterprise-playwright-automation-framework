// Test script using the Page Object Model
import { test } from "@playwright/test";
import LoginPage from "../pages/loginPage";
import { decrypt, encrypt } from "../utils/CryptojsUtil";
import { encryptEnvFile, decryptEnvFile } from "../utils/EncryptEnvFile";
import logger from "../utils/LoggerUtil";

test("test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await loginPage.fillUsername(decrypt(process.env.userid!));
  await loginPage.fillPassword(decrypt(process.env.password!));
  const homePage = await loginPage.clickLoginButton();
  await homePage.expectServiceTitleToBeVisible();
});

test.skip("Sample env test", async ({ page }) => {
  // const plaintext = 'Hello, Mars!';
  // const encryptedText = encrypt(plaintext);
  // console.log('SALT:', process.env.SALT);
  // console.log('Encrypted:', encryptedText);
  // const decryptedText = decrypt(encryptedText);
  // console.log('Decrypted:', decryptedText);
  //encryptEnvFile();
// console.log(decrypt("U2FsdGVkX19HqAXltbsJOfWuFCl7sl1CmEi+GlGs9S0="));

});
