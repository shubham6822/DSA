//Test 
const arr = [5, 1, 4, 3, 2, 9, 6, 10, 8, 15, 7];
const sorted = bubbleSort(arr);
console.log(sorted); 

// Bubble Sort Algorithm || Time Complexity: O(n^2) || Space Complexity: O(1)
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
           if (arr[j] > arr[j + 1]) {
                // Swap 
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

