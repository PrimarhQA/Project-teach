import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://demo-itam-jti.simpleone.ru/login');
    await page.getByRole('textbox', { name: 'Login' }).click();
    await page.getByRole('textbox', { name: 'Login' }).fill('qa');
    await page.getByText('Password', { exact: true }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('@m2~W)W1768W');
    await page.locator('[data-test="login-button"]').click();
    await page.goto('https://demo-itam-jti.simpleone.ru/');
    await expect(page.locator('[data-test="header-option-item-user"]').getByText('qa qa')).toBeVisible();
    await page.locator('[data-test="header-logo"]').click();
    await page.locator('[data-test="welcome-text"]').click();
    await expect(page.locator('[data-test="header-logo"]')).toBeVisible();
    await expect(page.locator('[data-test="welcome-text"]')).toBeVisible();
    await page.locator('[data-test="sidebar-menu-icon"]').getByRole('img').click();
    await page.locator('div').filter({ hasText: /^Agency$/ }).nth(1).click();
    await page.getByRole('link', { name: 'Контрагент' }).click();
    await expect(page.locator('[data-test="heading-title"]')).toBeVisible();
});