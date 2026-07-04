import { test, expect } from '@playwright/test';

test('Home page VRT', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', {
      level: 1,
      name: /Charming blooms/i,
    })
  ).toBeVisible();

  await expect(page.getByTestId('product-card').first()).toBeVisible();

  await expect(page).toHaveScreenshot('home-page.png', { fullPage: true });
});
