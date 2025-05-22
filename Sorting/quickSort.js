// Test
const arr = [5, 1, 4, 3, 2, 9, 6, 10, 8, 15, 7];
const sorted = quickSort(arr);
console.log(sorted); 

// Quick Sort Algorithm || Time Complexity: O(n log n) || Space Complexity: O(log n)
function quickSort(arr) {
    return quickSortHelper(arr, 0, arr.length - 1);
}

function quickSortHelper(arr, low, high) {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        quickSortHelper(arr, low, pivotIndex - 1);
        quickSortHelper(arr, pivotIndex + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    const pivot = arr[high]; // Choose last element as pivot
    let i = low - 1; // Place for swapping

    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
        }
    }

    // Swap pivot to its correct place
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1; // Return pivot index
}
