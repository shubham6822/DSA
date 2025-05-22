function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length/2);

    const left = mergeSort(arr.slice(0,mid))
    const right = mergeSort(arr.slice(mid))

    return merge(left,right)
}

function merge(left,right) {
    const result = []
    let i = 0 
    let j = 0 

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i])
            i++
        }else{
            result.push(right[j])
            j++
        }
    }

    while (i < left.length) result.push(left[i++]) 
    while (j < right.length) result.push(right[j++]) 

    return result
    
}

// Test
const arr = [5, 1, 4, 3, 2, 9, 6, 10, 8, 15, 7];
const sorted = mergeSort(arr);
console.log(sorted); // Output: [1, 2, 3, 4, 5]
