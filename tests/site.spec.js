import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await expect(page.locator('h1')).toContainText('Welcome to the-internet');
    await page.getByRole('link', { name: 'Checkboxes' }).click();
    await page.getByRole('checkbox').nth(1).uncheck();
    await page.getByRole('checkbox').nth(1).check();
    await expect(page.getByText('checkbox 1 checkbox')).toBeVisible();
    await expect(page.getByRole('heading')).toContainText('Checkboxes');
});