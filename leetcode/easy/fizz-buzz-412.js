/*
 * @param {number} n
 * @return {string[]}
*/
var fizzBuzz = function(n) {
  return Array(n).fill('').map((e, i) => (++i % 3 !== 0 ? e : 'Fizz') + (i % 5 !== 0 ? e : 'Buzz') || e + i);
};

console.log(fizzBuzz(15));