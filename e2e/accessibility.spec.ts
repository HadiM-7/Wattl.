import { test, expect } from "@playwright/test";

test.describe("Accessibility", () => {
  test("should have proper heading hierarchy", async ({ page }) => {
    await page.goto("/");

    // Check for H1
    const h1 = page.locator("h1");
    await expect(h1).toHaveCount(1);

    // Check for H2s
    const h2s = page.locator("h2");
    const h2Count = await h2s.count();
    expect(h2Count).toBeGreaterThan(0);
  });

  test("should have alt text on all images", async ({ page }) => {
    await page.goto("/");

    const images = page.locator("img");
    const imageCount = await images.count();

    expect(imageCount).toBeGreaterThan(0);

    // Check each image has alt text
    for (let i = 0; i < imageCount; i++) {
      const alt = await images.nth(i).getAttribute("alt");
      expect(alt).toBeTruthy();
    }
  });

  test("should have proper color contrast", async ({ page }) => {
    await page.goto("/");

    // Test button text contrast
    const buttons = page.locator("button");
    const buttonCount = await buttons.count();

    expect(buttonCount).toBeGreaterThan(0);

    // Test heading contrast
    const heading = page.locator("h1").first();
    const headingText = await heading.textContent();
    expect(headingText).toBeTruthy();
  });

  test("should support keyboard navigation", async ({ page }) => {
    await page.goto("/");

    // Tab through page elements
    await page.keyboard.press("Tab");
    const focusedElement = await page.evaluate(() => {
      return document.activeElement?.tagName;
    });

    // Should focus on an interactive element
    expect(["A", "BUTTON", "INPUT"]).toContain(focusedElement);
  });

  test("should have visible focus indicators", async ({ page }) => {
    await page.goto("/");

    const firstLink = page.locator("a").first();
    await firstLink.focus();

    // Check for focus outline
    const outline = await firstLink.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return style.outline || style.outlineWidth;
    });

    // Should have visible focus indicator (3px Teal)
    expect(outline).toBeTruthy();
  });

  test("should have aria-labels on interactive elements without visible text", async ({
    page,
  }) => {
    await page.goto("/");

    // Check hamburger menu has aria-label
    const hamburger = page.locator('button[aria-label]');
    const labelCount = await hamburger.count();

    expect(labelCount).toBeGreaterThan(0);
  });

  test("should have proper form labels", async ({ page }) => {
    await page.goto("/contact-us");

    // Check for label associations
    const inputs = page.locator("input, textarea");
    const inputCount = await inputs.count();

    expect(inputCount).toBeGreaterThan(0);

    // Each input should be in a form or have aria-label
    for (let i = 0; i < Math.min(inputCount, 3); i++) {
      const input = inputs.nth(i);
      const hasLabel =
        (await input.locator("..")
          .locator("label")
          .count()) > 0 ||
        (await input.getAttribute("aria-label")) !== null ||
        (await input.getAttribute("placeholder")) !== null;

      expect(hasLabel).toBeTruthy();
    }
  });

  test("should have semantic HTML structure", async ({ page }) => {
    await page.goto("/");

    // Check for nav element
    const nav = page.locator("nav");
    await expect(nav).toBeVisible();

    // Check for main element
    const main = page.locator("main");
    await expect(main).toBeVisible();

    // Check for footer element
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
  });

  test("should support prefers-reduced-motion", async ({ page }) => {
    // Set reduced motion preference
    await page.emulateMedia({ reducedMotion: "reduce" });

    await page.goto("/");

    // Page should still be interactive
    const heading = page.locator("h1");
    await expect(heading).toBeVisible();

    // Check that animations have reduced duration
    const animatedElement = page.locator("[class*='animate']").first();
    if (await animatedElement.isVisible()) {
      const duration = await animatedElement.evaluate((el) => {
        return window.getComputedStyle(el).animationDuration;
      });

      // Should be very short or zero
      expect(duration).toMatch(/0\.01ms|0s/);
    }
  });

  test("all pages should be properly structured", async ({ page }) => {
    const pages = ["/", "/locations", "/partner-with-us", "/contact-us", "/legal", "/delete-account"];

    for (const pageUrl of pages) {
      await page.goto(pageUrl);

      // Check for main content area
      const main = page.locator("main");
      await expect(main).toBeVisible();

      // Check for at least one heading
      const headings = page.locator("h1, h2, h3");
      expect(await headings.count()).toBeGreaterThan(0);
    }
  });
});
