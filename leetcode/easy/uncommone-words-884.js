/*
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(a,b) {
  let combined = a.concat(' ',b).split(' ');
  let count = {}; //hash map it and count

  for(let i = 0; i < combined.length; i++) {
    if(count.hasOwnProperty(combined[i])) { 
      count[combined[i]]++;
    } else {
      count[combined[i]] = 1;
    }
  }
  return combined.filter((e) => (count[e] === 1));
};

console.log(uncommonFromSentences( "s z z z s", "s z ejt"));