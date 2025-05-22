//Test 
const arr = [5, 1, 4, 3, 2, 9, 6, 10, 8, 15, 7];
const sorted = selectionSort(arr);
console.log(sorted); 

// Selection Sort Algorithm || Time Complexity: O(n^2) || Space Complexity: O(1)
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}
