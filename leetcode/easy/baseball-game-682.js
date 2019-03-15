/*
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  var stack = [];  
  
  for (let i = 0; i < ops.length; i++) {
    switch(ops[i]) {
      case 'D':
        stack.push(stack[stack.length - 1] * 2);
        break;
      case 'C': 
       stack.pop();
       break;
      case '+':
       stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
       break;
      default: 
       stack.push(parseInt(ops[i]));
    }
  }

  return stack.reduce((acc, curr) => (acc + curr));
};

console.log(calPoints(["5","-2","4","C","D","9","+","+"]));
