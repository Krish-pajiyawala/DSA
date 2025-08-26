

// 2.Balanced parenthesis

function isBalanced(str) {
  let stack = [];
  let pairs = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } 
    else if (char === ')' || char === '}' || char === ']') {
      if (stack.length === 0 || stack[stack.length - 1] !== pairs[char]) {
        return false; 
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}

console.log(isBalanced("{[()]}"));   
console.log(isBalanced("{[(])}"));  
console.log(isBalanced("((()))"));   
console.log(isBalanced("((())"));    