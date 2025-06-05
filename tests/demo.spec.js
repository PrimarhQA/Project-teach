import { test, expect } from '@playwright/test';

import { faker } from '@faker-js/faker';

 async function registerRundomUser(page, name, email, password) {
     await page.goto('https://conduit-realworld-example-app.fly.dev/');
     await page.getByRole('link', { name: 'Sign up' }).click();
     await page.getByRole('textbox', { name: 'Your Name' }).click();
     await page.getByRole('textbox', { name: 'Your Name' }).fill(name);
     await page.getByRole('textbox', { name: 'Email' }).click();
     await page.getByRole('textbox', { name: 'Email' }).fill(email);
     await page.getByRole('textbox', { name: 'Password' }).click();
     await page.getByRole('textbox', { name: 'Password' }).fill(password);
     await page.getByRole('button', { name: 'Sign up' }).click();
};
test('test', async ({ page }) => {
    await registerRundomUser (page, )

});