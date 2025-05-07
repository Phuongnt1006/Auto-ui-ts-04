import test, { expect, Page } from '@playwright/test';
import { verify } from 'crypto';
test.beforeEach('Before each', async ({page}) => {
    await page.goto('https://test-with-me-app.vercel.app/learning/web-elements/elements/input');
});
test('verify normal input', async ({ page }) => {
    //let xpath =`//input[@placeholder = 'Hello!' and @type = 'text']`;
    await page.getByPlaceholder('Hello!').fill('ABC');
    await page.locator(xpath).fill("ABC");
    expect(page.getByText('value: ABC')).toBeVisible();
});
test('verify input number - first approach - using fill', async ({ page }) => {
    let xpath =`//input[@role = 'spinbutton']`;
    //await page.getByPlaceholder('Hello!').fill('ABC');
    await page.locator(xpath).fill("101");
    await page.keyboard.press('Enter');
    expect(page.getByText('value: 100')).toBeVisible();
});
test('verify input number - second approach - using keybroard type', async ({ page }) => {
    let xpath =`//input[@role = 'spinbutton']`;
    //await page.getByPlaceholder('Hello!').fill('ABC');
    await page.locator(xpath).click();
    await page.locator(xpath).clear();
    await page.keyboard.type('101');
    await page.keyboard.press('Enter');
    expect(page.getByText('value: 101')).toBeVisible();
});
test('verify text area', async ({ page }) => {
    let xpath =`//textarea[@placeholder = 'Test with me!']`;
    await page.locator(xpath).fill("Test");
    await page.keyboard.press('Enter');
    expect(page.getByText('value: Text with me')).toBeVisible();
});
test('verify Password Box', async ({ page }) => {
    let xpath =`//input[@placeholder = 'Input password' and @type = 'password']`;
    await page.locator(xpath).fill("123456");
    await page.keyboard.press('Enter');
    expect(page.getByText('value: 123456')).toBeVisible();
});
async function fillInput(page: Page, label: string, value: string){
    let xpath =`//span[.//text()[normalize-space()='${label}']]/following::input)[1]`;
    expect(page.getByText('value: 123456')).toBeVisible();
});
async function fillInputnumberbyKeyboard(page: Page, label: string, value: string) {
    let xpath =`//span[.//text()[normalize-space()='${label}']]/following::input)[1]`;
    expect(page.getByText('value: 123456')).toBeVisible();
}

test('verify OTP Box', async ({ page }) => {
    let xpath =`//input[@placeholder = 'Input password' and @type = 'password']`;
    await page.locator(xpath).fill("123456");
    await page.keyboard.press('Enter');
    expect(page.getByText('')).toBeVisible();
});