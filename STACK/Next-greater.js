

// 3.next Greater Elements

function nextGreaterElements(arr) {
  let n = arr.length;
  let result = new Array(n).fill(-1);  
  let stack = []; 

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }

    if (stack.length > 0) {
      result[i] = stack[stack.length - 1];
    }

    stack.push(arr[i]);
  }

  return result;
}

console.log(nextGreaterElements([4, 5, 2, 25])); 
console.log(nextGreaterElements([13, 7, 6, 12]));