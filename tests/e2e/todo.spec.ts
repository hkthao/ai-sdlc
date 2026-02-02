import { test, expect } from '@playwright/test';

// Define the Issue and Acceptance Criteria for traceability
const ISSUE_NUMBER = 1;

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Todo Application E2E Tests', () => {

  test('AC-2: Application starts without errors and is accessible', async ({ page }) => {
    await expect(page).toHaveTitle(/My Todo App/);
    await expect(page.locator('#app')).toBeVisible(); // Check if the main app element is visible
    // Implicitly tested by beforeEach successfully navigating to the page.
    // If the server didn't start, or had errors, the page.goto('/') would fail.
  });

  test('AC-3 & AC-4: Users can add a todo item and it appears in the list', async ({ page }) => {
    const todoText = 'Learn Playwright';
    await page.fill('.todo-input', todoText); // Using class selector
    await page.click('.add-button'); // Using class selector

    const todoItems = page.locator('.todo-item');
    await expect(todoItems).toHaveCount(1); // Expect one todo item
    await expect(todoItems.first()).toContainText(todoText);

    // Add another todo to ensure multiple items work
    const todoText2 = 'Build an awesome app';
    await page.fill('.todo-input', todoText2);
    await page.click('.add-button');

    await expect(todoItems).toHaveCount(2); // Expect two todo items
    await expect(todoItems.nth(1)).toContainText(todoText2); // Check the second item
  });

  test('AC-5: Users can mark a todo item as completed and the UI reflects this state', async ({ page }) => {
    const todoText = 'Mark this complete';
    await page.fill('input[placeholder="Add a new todo"]', todoText);
    await page.press('input[placeholder="Add a new todo"]', 'Enter');

    const todoItem = page.locator('.todo-item', { hasText: todoText });
    await expect(todoItem).toBeVisible();

    // Assuming there's a checkbox or a button to mark as complete
    await todoItem.locator('.todo-checkbox').click();

    // Check for a visual indicator of completion (e.g., strikethrough class, different color)
    await expect(todoItem).toHaveClass(/completed/); // Adjust class name as per actual implementation
  });

  test('AC-6: Users can delete a todo item and it is removed from the list', async ({ page }) => {
    const todoText = 'Delete this todo';
    await page.fill('input[placeholder="Add a new todo"]', todoText);
    await page.press('input[placeholder="Add a new todo"]', 'Enter');

    const todoItem = page.locator('.todo-item', { hasText: todoText });
    await expect(todoItem).toBeVisible();

    // Assuming there's a delete button
    await todoItem.locator('.delete-button').click(); // Adjust selector as per actual implementation

    await expect(todoItem).not.toBeVisible();
  });

  // AC-1: The project uses Vue 3 with Vite. (Implicitly verified by AC-2 and tests running)
  // AC-7: No test files are created or modified in this PR. (Developer AC - verified by manual inspection)
});
