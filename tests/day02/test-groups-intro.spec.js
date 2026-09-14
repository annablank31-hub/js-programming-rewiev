import {test} from "@playwright/test";

test.describe("", () => {

    test.beforeAll(async () => {
        console.log("Before all test cases");
    });

    test.afterAll(async () => {
        console.log("After all test cases");
    });

    test.beforeEach(async () => {
        console.log("Before each test case");
    });
    test.afterEach(async () => {
        console.log("After each test case");
    });

    test ("test case 1", async () => {
        console.log("test case 1 is executed");
    });

    test ("test case 2", async () => {
        console.log("test case 2 is executed");
    });

    test ("test case 3", async () => {
        console.log("test case 3 is executed");
    });

    test ("test case 4", async () => {
        console.log("test case 4 is executed");
    });


});
