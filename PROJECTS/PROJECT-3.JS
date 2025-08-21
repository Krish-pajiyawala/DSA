
let sortarr = (arr) => {
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
    return [...sortarr(left),pivot,...sortarr(right)]
}


// 1 => Write a program to implement binary search to find the index of a target element in a sorted.



let Binaryseraching = (arr, val) => {
    let lower = 0;
    let higher = arr.length - 1;

    while (lower <= higher) {
        let mid = Math.floor((lower + higher) / 2);
        if (arr[mid] == val) {
            return mid;
        } else if (arr[mid] < val) {
            lower = mid + 1;
        } else {
            higher = mid - 1;
        }
    }
    return -1;  
};


 let arr = [5,6,7,1,2,3,4];
let sorted = sortarr(arr);
let index = Binaryseraching(sorted, 4);
index != -1 ?  console.log(`Element at index:`, index) : console.log("Element Not Found")

// OUTPUT:
// Element at index: 3