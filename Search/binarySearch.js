//Test
const arr = [5, 1, 4, 3, 2, 9, 6, 10, 8, 15, 7];
const target = 10;
const index = binarySearch(arr, target);
console.log(index);

// Binary Search Algorithm || Time Complexity: O(log n) || Space Complexity: O(1)
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Target found
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    return -1; // Target not found
}