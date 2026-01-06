import { readFileSync , writeFileSync} from 'fs';

export function findTestData(file: string, name: string, pass: string) {
    const filePath = new URL(file, import.meta.url);
    const testData = JSON.parse(readFileSync(filePath, 'utf8')) as Array<{ username: string; password: string }>;
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
    const testData = JSON.parse(readFileSync(filePath, 'utf8'));
    let index = 0;
    (testData as Array<{ username: string; password: string }>).forEach(({ username, password }) => {
        console.log(index + "---" + username + "---" + password);
        index++;
    });
}
export function updateTestData(file: string, index: number, username: string, password: string) {
    const filePath = new URL(file, import.meta.url);
    const testData = JSON.parse(readFileSync(filePath, 'utf8'));
    testData[index].username = username;
    testData[index].password = password;
    writeFileSync(filePath, JSON.stringify(testData, null, 2), 'utf8');
    console.log(username + "---" + password);
}
export function addTestData(file: string, name: string, pass: string) {
    const filePath = new URL(file, import.meta.url);
    const testData = JSON.parse(readFileSync(filePath, 'utf8'));
    testData[testData.length] = { username: name, password: pass };
    writeFileSync(filePath, JSON.stringify(testData, null, 2), 'utf8');
    console.log(name + "---" + pass);
}



