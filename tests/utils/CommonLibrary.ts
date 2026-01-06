import { readFileSync, writeFileSync } from 'fs';

export function findTestData(file: string, name: string, pass: string) {
    const filePath = new URL(file, import.meta.url);
    const readData = readFileSync(filePath, 'utf8');
    const testData = JSON.parse(readData) as Array<{ username: string; password: string }>;
    // Log each entry (preserve existing behavior)
    testData.forEach(({ username, password }, i) => {
        console.log(i + "---" + username + "---" + password);
    });
    // Find the index and return it (or -1 if not found)
    const idx = testData.findIndex(({ username, password }) => username === name && password === pass);
    if (idx >= 0) {
        console.log("Found at index: " + idx);
    }
    return idx;
}

export function readTestData(file: string) {
    const filePath = new URL(file, import.meta.url);
    const readData = readFileSync(filePath, 'utf8');
    const testData = JSON.parse(readData) as Array<{ username: string; password: string }>;
    let index = 0;
    testData.forEach(({ username, password }, i) => {
        console.log(i + "---" + username + "---" + password);
    });
}
export function updateTestData(file: string, index: number, username: string, password: string) {
    const filePath = new URL(file, import.meta.url);
    const readData = readFileSync(filePath, 'utf8');
    const testData = JSON.parse(readData) as Array<{ username: string; password: string }>;
    testData[index].username = username;
    testData[index].password = password;
    const stringifydData = JSON.stringify(testData, null, 2);
    writeFileSync(filePath, stringifydData, 'utf8');
    console.log(username + "---" + password);
}
export function addTestData(file: string, name: string, pass: string) {
    const filePath = new URL(file, import.meta.url);
    const readData = readFileSync(filePath, 'utf8');
    const testData = JSON.parse(readData);
    testData[testData.length] = { username: name, password: pass };
    const stringifydData = JSON.stringify(testData, null, 2);
    writeFileSync(filePath, stringifydData, 'utf8');
    console.log(name + "---" + pass);
}



