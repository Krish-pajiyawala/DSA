let quickSorting = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[0]
    let left = []
    let right = []

    arr.forEach((element,index) => {
        if (index === 0) {
            return
        }
        if (element < pivot) {
           left.push(element) 
        }else{
            right.push(element)
        }
    })
    return [...quickSorting(left),pivot,...quickSorting(right)]
}


// 1 => Write a program to implement binary search to find the index of a target element in a sorted.

// let searchBinary = (arr, val) => {
//     let lower = 0;
//     let higher = arr.length - 1;

//     while (lower <= higher) {
//         let Mid = Math.floor((lower + higher) / 2);
//         if (arr[Mid] == val) {
//             return Mid;
//         } else if (arr[Mid] < val) {
//             lower = Mid + 1;
//         } else {
//             higher = Mid - 1;
//         }
//     }
//     return -1;  
// };


//  let arr = [1, 3, 5, 7, 9, 11, 13];
// let sorted = quickSorting(arr);
// let index = searchBinary(sorted, 7);
// index != -1 ?  console.log(`index:`, index) : console.log("Element not Found")

// OUTPUT:
// index: 3

// 2 => write a program to find the first and last occurrence of a target element using the lower and upper bound methods. also return the count of occurrences. 

// let findOccurrence = (arr,val)=>{
//   let lowerBound = () => {
//     let low = 0, high = arr.length;
//     while (low < high) {
//         let Mid = Math.floor((low + high) / 2);
//         if (arr[Mid] < val) {
//             low = Mid + 1;
//         } else {
//             high = Mid;
//         }
//     }
//     return low; 
// };


//   let upperBound = () => {
//     let low = 0, high = arr.length;
//     while (low < high) {
//         let Mid = Math.floor((low + high) / 2);
//         if (arr[Mid] <= val) {
//             low = Mid + 1;
//         } else {
//             high = Mid;
//         }
//     }
//     return low; 
// };
  
//   let First = lowerBound();
//   let Last = upperBound() ;
//   let count = (First < arr.length && arr[First] === val) ? (Last - First ) : 0;

//   return { First, Last, count };
//  }

// let arr2 = [2,5,4,3,1,6,9,78,1,58,5,12,6,3,2,2]
// let sorted2 = quickSorting(arr2)

// console.log(`LOWER-BOUND:${findOccurrence(sorted2,2).First}`)
// console.log(`UPPER-BOUND:${findOccurrence(sorted2,2).Last}`)
// console.log(`COUNT:${findOccurrence(sorted2,2).count}`)

 
// OUTPUT

// LOWER-BOUND:2
// UPPER-BOUND:5
// COUNT:3


// 3 => Write a program to find the pivot index where the rotation occurs in a rotated sorted array.

// let findPivot = (arr) => {
//     let low = 0, high = arr.length - 1;

//     if (arr[low] <= arr[high]) {
//         return 0;
//     }
//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         if (arr[mid] > arr[mid + 1]) {
//             return mid + 1;
//         }
//         if (arr[mid] < arr[mid - 1]) {
//            return mid;
//         }

//         if (arr[mid] >= arr[low]) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }
//     return 0; 
// };

// let arr3 = [6,7,8,9,10,1,2,3,4,5]

// console.log(`Pivot Index is ${findPivot(arr3)}`)

// OUTPUT

// Pivot Index is 5
