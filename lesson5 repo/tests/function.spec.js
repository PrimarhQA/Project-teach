.scip
import { faker } from '@faker-js/faker';
import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
    await page.goto('https://realworld.qa.guru/');
    await page.getByRole('link', { name: 'Sign up' }).click();

    await page.getByRole('textbox', { name: 'Your Name' }).fill(faker.internet.username());

    await page.getByRole('textbox', { name: 'Email' }).fill(faker.internet.email());

    await page.getByRole('textbox', { name: 'Password' }).fill(faker.internet.password());
    await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();
    await page.getByRole('button', { name: 'Sign up' }).click();
    await expect(page.getByRole('navigation')).toContainText('Primarh');
    await expect(page.getByText('Primarh')).toBeVisible();
    await page.getByRole('link', { name: 'New Article' }).click();

    await page.getByRole('textbox', { name: 'Article Title' }).fill('Title4');
    await page.getByRole('textbox', { name: 'What\'s this article about?' }).fill('discript');
    await page.getByRole('textbox', { name: 'Write your article (in' }).fill('wright text');
    await page.getByRole('textbox', { name: 'Enter tags' }).fill('store,teg');
    await page.getByRole('button', { name: 'Publish Article' }).click();

    await page.getByRole('textbox', { name: 'Write a comment...' }).click();
    await page.getByRole('textbox', { name: 'Write a comment...' }).fill('comment');
    await page.getByRole('button', { name: 'Post Comment' }).click();
});