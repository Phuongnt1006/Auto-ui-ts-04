import { test, expect } from '@playwright/test';

test.beforeAll('Before all',() => {
    console.log("Before all");
})
test.beforeEach('Before each',() => {
    console.log("Before each");
});
test('has title 1', async ({page}) =>{
    console.log("has title 1");
});
test('has title 2', async ({page}) =>{
    console.log("has title 2");
});

test.afterEach('after each',() => {
    console.log("after each");
})
test.afterAll('after all',() => {
    console.log("after all");
})
test.describe("group all",() => {
    test('has title 1', async ({page}) =>{
        console.log("has title 1")
    console.log("has title 1");
});
test('has title 2', async ({page}) =>{
    console.log("has title 2")
});
})