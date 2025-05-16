import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://demo-itam-jti.simpleone.ru/login');
    await page.getByRole('textbox', { name: 'Login' }).click();
    await page.getByRole('textbox', { name: 'Login' }).fill('qa');
    await page.getByText('Password', { exact: true }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('@m2~W)W1768W');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="welcome-text"]')).toBeVisible();
    await expect(page.locator('[data-test="welcome-text"]')).toContainText('Welcome to SimpleOne!');
    await page.locator('[data-test="sidebar-menu-icon"]').getByRole('img').click();
    await page.click('xpath=//a[text()="Counterparts"]');
    await expect(page.locator('[data-test="heading-title"]')).toBeVisible();
    await expect(page.locator('[data-test="heading-title"]')).toContainText('Counterparts');
});