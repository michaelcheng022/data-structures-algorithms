/*
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  var numString = num.toString();
  
  if (numString.length === 1) {
    return parseInt(numString);
  }
  else {
    let result = numString.split('').reduce((a,b) => (parseInt(a) + parseInt(b)));
    return addDigits(result);
  }
  
};

console.log(addDigits(38));