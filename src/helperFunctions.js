export function randomIntArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

export function arraysAreEqual(array1, array2) {
    return array1.join() === array2.join();
}