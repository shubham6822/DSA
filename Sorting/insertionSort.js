// Test
const arr = [5, 1, 4, 3, 2, 9, 6, 10, 8, 15, 7];
const sorted = insertionSort(arr);
console.log(sorted);

// Insertion Sort Algorithm || Time Complexity: O(n^2) || Space Complexity: O(1)
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        // Move elements of arr[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
