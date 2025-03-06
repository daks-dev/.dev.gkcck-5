import { expect, test, type PlaywrightTestArgs } from '@playwright/test';

test('about page has expected tytle', async ({ page }) => {
  await page.goto('/about');
  await expect(page).toHaveTitle(/О нас/);
});

test('about page has expected header', async ({ page }: PlaywrightTestArgs) => {
  await page.goto('/about');
  await expect(page.getByRole('heading', { name: /О группе компаний/ })).toBeVisible();
});
