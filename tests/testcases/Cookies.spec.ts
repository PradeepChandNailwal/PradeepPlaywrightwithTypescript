import { test } from'@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  // Set item
  await page.evaluate(() => {
    localStorage.setItem('username', 'rahulshettyacademy');
    localStorage.setItem('password', 'Learning@830$3mK2');
  });

  // Get item
  const username=await page.evaluate(() =>localStorage.getItem('username'));
  console.log(username);
  const password=await page.evaluate(() =>localStorage.getItem('password'));
  console.log(password);

  // Save storage state
  await page.context().storageState({ path: 'storageState.json' });
 
  await page.getByLabel('Username:').fill(username);
  await page.getByLabel('Password:').fill(password);
  await page.getByLabel('I Agree to the terms and').check();
  await page.getByRole('button', { name:'Sign In' }).click();
});