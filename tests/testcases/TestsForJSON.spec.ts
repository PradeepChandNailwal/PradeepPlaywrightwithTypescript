import { test, expect } from '@playwright/test';
import { readFileSync } from 'fs';
import { writeFileSync } from 'fs';
import { addTestData, findTestData, readTestData, updateTestData } from '../utils/CommonLibrary';

const file = '../testData/Ali.json';

test.only("Search JSON", async ({  }) => {
    console.log('Searching JSON Test Data');
    let foundIndex = findTestData(file, "user2", "password2");
    console.log("Found : " + foundIndex);
});

test("Read JSON", async ({  }) => {
    console.log('Reading JSON Test Data');
    readTestData(file);
});
test("Write JSON", async ({  }) => {
    console.log('Updating JSON Test Data');
    addTestData(file, "Jai", "Hanuman");
});
test("Update JSON", async ({  }) => {
    console.log('Updating JSON Test Data');
    updateTestData(file, 3,"Jai", "Hanuman");
});



