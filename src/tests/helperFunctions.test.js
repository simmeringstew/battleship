import { arraysAreEqual } from "../helperFunctions.js"

test("When arrays are the same, true is returned", () => {
    const array1 = [0, 1];
    const array2 = [0, 1];
    expect(arraysAreEqual(array1, array2)).toBe(true);
});

test("When arrays are not the same, false is returned", () => {
    const array1 = [0, 1];
    const array2 = [9, 9];
    expect(arraysAreEqual(array1, array2)).toBe(false);
});