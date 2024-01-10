import { test, expect } from '@playwright/test';
import type { Page } from '@playwright/test';
// Annotate entire file as serial.
test.describe.configure({ mode: 'serial' });
test.describe('Opening site Byredo', () => {
  // Declare page outside of the test hooks so it's accessible by all tests.
  let page: Page;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage(); // Create new page
    await page.goto(`https://www.byredo.com/uk_en/`); // Go to Byredo page
  });
  test.afterAll(async () => {
    await page.close(); // Close the page after all tests
  });
  test(' Checking Title', async () => {
    // Check the title of the table
    const pageTitle = await page.title();
    await expect(pageTitle).toBe('BYREDO Official Site | Perfumes, Candles & Body Care');
  });
  test.describe('Search the product', () => {
    test('Search', async () => {
      // Click the Accept All Cookies button
      await page.click('text=Accept All Cookies');
      // Click the search input
      await page.click('.buttonlink.block-title-search');
      // Fill the search input
      await page.locator('#search').fill('Perfume');
      // Press the Enter key after filling the search input
      await page.press('#search', 'Enter');
    });
    test(' Validate the search page ', async () => {
      // Validate that the current URL matches the expected URL
      const currentURL = page.url();
      await expect(currentURL).toBe('https://www.byredo.com/uk_en/search/?q=Perfume');
    });
  });
  test.describe('Applying filters', () => {
    test('Click on the "Price: High to low" filter', async () => {
      // Wait for the element with the text "Filter" to be visible
      const filterButton = await page.waitForSelector('text=Filter', { state: 'visible' });
      // Click the visible "Filter" button
      await filterButton.click();
      await page.click('text=Price: High to low');
    });
    test('Click on the "Floral" alfactory', async () => {
      // Wait for the element with the text "Filter" to be visible
      const filterButton = await page.waitForSelector('text=Filter', { state: 'visible' });
      // Click the visible "Filter" button
      await filterButton.click();
      await page.click('text=Floral');
      // Wait for the close button  to be visible
      const closeButton = await page.waitForSelector('span[aria-label="Close Filter"]', { state: 'visible' });
      // Click the visible close button
      await closeButton.click();
    });
  });
  test.describe('Selecting the product  ', () => {
    test('Click on the product', async () => {
      // Wait for the product  to be visible
      const product = await page.waitForSelector('a[data-id="2468"]', { state: 'visible' });
      // Click the product
      await product.click();
    });
    test(' Validate the product page ', async () => {
      // Validate that the current URL matches the expected URL
      const currentURL = page.url();
      await expect(currentURL).toBe('https://www.byredo.com/uk_en/rose-of-no-mans-land-eau-de-parfum-250ml');
    });
    test.describe('Add to cart the product  ', () => {
      test('Click the  increment Button', async () => {
        // Wait for the increment Button to be visible
        const incrementButton = await page.waitForSelector('.increment-qty', { state: 'visible' });
        // Click the visible increment Button
        await incrementButton.click();
      });
      test(' Adding product ', async () => {
        // Wait for the add to cart button to be visible
        const addToBagButton = await page.waitForSelector('button#product-addtocart-button', { state: 'visible' });
        // Click the visible "Add to Bag" button
        await addToBagButton.click();
      });
    });
    test.describe('Proceed to checkout', () => {
      test('Click the proceed to checkout button', async () => {
        // Wait for the proceed button to be visible
        const checkoutButton = await page.waitForSelector('button#top-cart-btn-checkout', { state: 'visible' });
        // Click the visible "Proceed to checkout" button
        await checkoutButton.click();
      });
      test(' Validate the product page ', async () => {
        // Validate that the current URL matches the expected URL
        const currentURL = page.url();
        await expect(currentURL).toBe('https://www.byredo.com/uk_en/checkout/');
      });
    });
    test.describe('Checkout', () => {
      test('Fill the input field with an email when visible', async () => {
        // Wait for the input field to be visible
        const emailInput = await page.waitForSelector('input[type="email"]', { state: 'visible' });
        // Fill the visible input field with the email
        await emailInput.fill('usman.ali18feb@gmail.com');
      });
      test('Click on the "Continue" button when visible', async () => {
        // Wait for the button to be visible
        const continueButton = await page.waitForSelector('button.action.continue-btn', { state: 'visible' });
        // Click the visible "Continue" button
        await continueButton.click();
      });
      test('Fill the password input field when visible', async () => {
        // Wait for the input field to be visible
        const passwordInput = await page.waitForSelector('input#customer-password', { state: 'visible' });

        // Fill the visible input field with the password
        await passwordInput.fill('@Mani112233');
      });
      test('Click on the "Sign in" button when visible', async () => {
        // Wait for the button to be visible
        const signInButton = await page.waitForSelector('button.action.login.primary', { state: 'visible' });

        // Click the visible "Sign in" button
        await signInButton.click();
      });
    });
  });
});