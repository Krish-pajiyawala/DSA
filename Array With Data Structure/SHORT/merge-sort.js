// Example
let numbers = [410, 250, 7000, 100, 30];
let sorted = mergeSort(numbers);
console.log("Sorted array:", sorted);


function mergeSort(arr) {
  if (arr.length <= 1) return arr; // base case

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  // Compare and merge
  while (i < left.length && j < right.length) {
    result.push(left[i] < right[j] ? left[i++] : right[j++]);
  }

  // Add remaining elements
  return result.concat(left.slice(i), right.slice(j));
}

