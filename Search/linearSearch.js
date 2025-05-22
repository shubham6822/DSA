//Test
const arr = [5, 1, 4, 3, 2, 9, 6, 10, 8, 15, 7];
const target = 10;
const index = linearSearch(arr, target);
console.log(index); 

// Linear Search Algorithm || Time Complexity: O(n) || Space Complexity: O(1)
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1; // Not found
}