// 1. 2D array print and also print its transpose array.

// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// console.log("Orignal Array");
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// console.log("Transpose Array");
// for (let j = 0; j < arr.length; j++) {
//     let Ans = [];
//     for (let k = 0; k < arr.length; k++) {
//         Ans.push(arr[k][j])
//     }
//     console.log(Ans);
// }

// Orignal Array
// [ 1, 2, 3 ]
// [ 4, 5, 6 ]
// [ 7, 8, 9 ]

// Transpose Array
// [ 1, 4, 7 ]
// [ 2, 5, 8 ]
// [ 3, 6, 9 ]

// 2. Array Descending order sorting using selection sort.

// let arr = [5, 2, 8, 1, 9];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {

//         if (arr[i] < arr[j]) {
//             let n = arr[i];
//             arr[i] = arr[j];
//             arr[j] = n;
//         }
//     }
// }
// console.log("Descending Order is =",arr);

// // Output: [9, 8, 5, 2, 1]

// 3. Array Ascending order sorting using Merge sort.

// let arr = [21, 32, 44, 65, 95, 57];

// function Merge(arr) {
//   if (arr.length <= 1) return arr;

//   let mid = Math.floor(arr.length / 2);
//   let left = arr.slice(0, mid);
//   let right = arr.slice(mid);

//   return merge(Merge(left), Merge(right));
// }

// console.log(Merge(arr));

// function merge(left, right) {
//   let result = [];

//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       result.push(left.shift());
//     } else {
//       result.push(right.shift());
//     }
//   }

//   return result.concat(left,right)
// }

// Output: [21, 32, 44, 57, 65, 95]

