// Test
const arr = [5, 1, 4, 3, 2, 9, 6, 10, 8, 15, 7];
const sorted = cyclicSort(arr);
console.log(sorted); 

// Cyclic Sort Algorithm || Time Complexity: O(n) || Space Complexity: O(1)
function cyclicSort(arr) {
    let i = 0;
    while (i < arr.length) {
        const correctIndex = arr[i] - 1; // Calculate the correct index for the current element
        if (arr[i] !== arr[correctIndex]) {
            [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]]; // Swap to place the element in its correct position
        } else {
            i++; // Move to the next element if it's already in the correct position
        }
    }
    return arr;
}
