import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("should navigate between all pages", async ({ page }) => {
    // Home page
    await page.goto("/");
    await expect(page).toHaveTitle(/Wattl/);
    await expect(page.locator("h1")).toContainText("Don't Let a Dead Battery");

    // Locations page
    await page.goto("/locations");
    await expect(page).toHaveTitle(/Locations/);

    // Partner With Us page
    await page.goto("/partner-with-us");
    await expect(page).toHaveTitle(/Partner/);

    // Contact Us page
    await page.goto("/contact-us");
    await expect(page).toHaveTitle(/Contact/);

    // Legal page
    await page.goto("/legal");
    await expect(page).toHaveTitle(/Legal/);

    // Delete Account page
    await page.goto("/delete-account");
    await expect(page).toHaveTitle(/Delete/);
  });

  test("should scroll to How It Works section from home page", async ({
    page,
  }) => {
    await page.goto("/");
    const howItWorksLink = page.locator('a[href="/#how-it-works"]').first();
    await howItWorksLink.click();

    const howItWorksSection = page.locator('id=how-it-works');
    await expect(howItWorksSection).toBeVisible();
  });

  test("should navigate to How It Works from other pages", async ({ page }) => {
    // Test from partner-with-us page
    await page.goto("/partner-with-us");
    const howItWorksLink = page.locator('a[href="/#how-it-works"]').first();
    await howItWorksLink.click();

    // Should navigate to home page with hash
    await page.waitForURL("/#how-it-works", { timeout: 5000 });
    await expect(page).toHaveURL(/\/#how-it-works/);
  });

  test("should update navbar underline on hover only", async ({ page }) => {
    await page.goto("/");

    const homeLink = page.locator('a:has-text("Home")').first();
    const homeUnderline = homeLink.locator("span");

    // Check initial state (no visible underline)
    await expect(homeUnderline).toHaveCSS("opacity", "0");

    // Hover over link
    await homeLink.hover();

    // Check underline appears on hover
    await expect(homeUnderline).toHaveCSS("opacity", "1");

    // Move away from link
    await page.mouse.move(0, 0);

    // Check underline disappears
    await expect(homeUnderline).toHaveCSS("opacity", "0");
  });

  test("should have working Find a Station button", async ({ page }) => {
    await page.goto("/");
    const findButton = page.locator("button:has-text('Find a Station')").first();
    await findButton.click();
    await page.waitForURL("/locations");
    await expect(page).toHaveURL("/locations");
  });
});
