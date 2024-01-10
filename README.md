Byredo Demo Test Suite

This automated test suite navigates through the Byredo website, performs various actions, and validates the expected outcomes.
Prerequisites

1. Node.js installed
2. Playwright dependencies installed (npm install -D @playwright/test)

Getting Started
1. Clone the repository: git clone https://github.com/usmanali18feb/Byredo-Demo-Test-Suite.git
2. Install dependencies using npm install.
3. Run the test suite using: npx playwright test

Test Descriptions

Navigate to Byredo.com
1. Open the Byredo website and check the title.

Search for a Product
1. Accept all cookies.
2. Click on the search input, fill it with "Perfume," and press Enter.
3. Validate that the current URL matches the expected search page URL.

Apply Filters
1. Click on the "Price: High to low" filter.
2. Click on the "Floral" alfactory, close the filter, and validate the action.

Select a Product
1. Click on a specific product.
2. Validate that the current URL matches the expected product page URL.

Add Product to Cart
1. Click the increment button to increase the quantity.
2. Click the "Add to Bag" button.

Proceed to Checkout
1. Click the "Proceed to checkout" button.
2. Validate that the current URL matches the expected checkout page URL.

Checkout
1. Fill the email input field with "usman.ali18feb@gmail.com."
2. Click on the "Continue" button.
3. Fill the password input field with "@Mani112233."
4. Click on the "Sign in" button.

Notes
1. The test suite is configured to run in serial mode.
2. Test execution assumes a stable internet connection.
3. Adjustments may be required based on updates to the Byredo website.



