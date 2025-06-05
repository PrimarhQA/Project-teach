import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('test', async ({ page }) => {
    await page.goto('https://realworld.qa.guru/');
    await page.getByRole('button', { name: 'terra' }).click();
    await expect(page.getByRole('button', { name: 'terra' }).first()).toBeVisible();
    await page.getByRole('link', { name: 'tutis dolores Read more...' }).click();
    await expect(page.getByRole('heading', { name: 'tutis' })).toBeVisible();

    await page.goto('https://realworld.qa.guru/');
    await page.getByRole('button', { name: 'sumo' }).click();
    await expect(page.getByRole('button', { name: 'sumo' }).first()).toBeVisible();
    await page.getByRole('link', { name: 'Doloribus auditor conatus' }).click();
    await expect(page.getByRole('heading')).toContainText('Doloribus auditor conatus carcer vespillo totus viriliter.');

    await page.goto('https://realworld.qa.guru/');
    await page.getByRole('button', { name: 'Page 3' }).click();
    await expect(page.getByRole('button', { name: 'Page 3 is your current page' })).toBeVisible();
    await expect(page.getByRole('main')).toContainText('conduit');
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
});