import { test, expect } from '@playwright/test';

test('navigate to blog page', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: /blog/i }).first().click();

  await expect(
    page.getByRole('heading', { name: /blog/i })
  ).toBeVisible();
});
