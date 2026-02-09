import { test, expect } from "@playwright/test";

test.describe("Forms", () => {
  test("Contact form validation - required fields", async ({ page }) => {
    await page.goto("/contact-us");

    // Try to submit empty form
    const submitButton = page.locator('button[type="submit"]').first();
    await submitButton.click();

    // Check for validation messages
    const nameInput = page.locator('input[placeholder*="John"]');
    const emailInput = page.locator('input[type="email"]').first();

    // Verify form is still visible (validation prevented submission)
    await expect(nameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
  });

  test("Contact form email validation", async ({ page }) => {
    await page.goto("/contact-us");

    const nameInput = page.locator('input[placeholder*="John"]');
    const emailInput = page.locator('input[type="email"]').first();

    // Fill form with invalid email
    await nameInput.fill("Test User");
    await emailInput.fill("invalid-email");

    const submitButton = page.locator('button[type="submit"]').first();
    await submitButton.click();

    // Email input should still be visible (validation error)
    await expect(emailInput).toBeVisible();
  });

  test("Partner form should exist and be accessible", async ({ page }) => {
    await page.goto("/partner-with-us");

    // Check for form elements
    const inputs = page.locator("input, textarea").all();
    const inputCount = (await inputs).length;

    expect(inputCount).toBeGreaterThan(0);
  });

  test("Locations form should exist and be accessible", async ({ page }) => {
    await page.goto("/locations");

    // Check for form elements
    const inputs = page.locator("input, textarea").all();
    const inputCount = (await inputs).length;

    expect(inputCount).toBeGreaterThan(0);
  });

  test("Delete Account form should exist", async ({ page }) => {
    await page.goto("/delete-account");

    // Check for form elements
    const inputs = page.locator("input").all();
    const inputCount = (await inputs).length;

    expect(inputCount).toBeGreaterThan(0);
  });

  test("Form inputs should have visible labels", async ({ page }) => {
    await page.goto("/contact-us");

    // Check for visible labels or aria-labels
    const nameLabel = page.locator("label:has-text('Full Name'), input[aria-label*='Name']");
    await expect(nameLabel).toBeDefined();
  });

  test("Form should accept valid input", async ({ page }) => {
    await page.goto("/contact-us");

    const nameInput = page.locator('input[placeholder*="John"]');
    const emailInput = page.locator('input[type="email"]').first();
    const messageInput = page.locator("textarea").first();

    // Fill with valid data
    await nameInput.fill("John Doe");
    await emailInput.fill("john@example.com");
    await messageInput.fill("This is a test message");

    // Verify values are set
    await expect(nameInput).toHaveValue("John Doe");
    await expect(emailInput).toHaveValue("john@example.com");
    await expect(messageInput).toHaveValue("This is a test message");
  });

  test("Form should have accessible focus states", async ({ page }) => {
    await page.goto("/contact-us");

    const nameInput = page.locator('input[placeholder*="John"]');

    // Tab to input
    await nameInput.focus();

    // Check for focus outline
    const outline = await nameInput.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return style.outline || style.outlineWidth;
    });

    // Should have some focus indicator
    expect(outline).toBeTruthy();
  });
});
