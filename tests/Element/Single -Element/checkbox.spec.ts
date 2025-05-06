import { test, expect } from '@playwright/test';

test.beforeEach('Before each', async ({page}) => {
    await page.goto('https://test-with-me-app.vercel.app/learning/web-elements/elements/input');
});
test('verify check checkbox', async ({ page }) => {
 await selectCheckbox(page, 'Apple', true);
 await expect(page.getByText('Selected values: Apple')).toBeVisible();
});
test('verify uncheck checkbox', async ({ page }) => {
     await uncheckCheckbox(page, 'Apple', false);
     await expect(page.getByText('Selected values: Apple')).not.toBeVisible();
    });

async function selectCheckbox(page: Page, label: String, check: boolean) {
    let xpath = `//lable[.//text()[normalize-space()='${label}'] and .//input[@type='checkbox']]`;
    let checkbox = page.locator(xpath);
    let className = await checkbox.getAttribute('class')
    let classNames = className?.split(' ');
    let currentStatus = classNames?.includes('ant-checkbox-wrapper-checked');
    if ((!currentStatus && check) || (currentStatus && !check)) {
        await checkbox.click();
    }
    }

