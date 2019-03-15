
var endorsements = [
  {
    skill: "css",
    user: "Bill",
  },
  {
    skill: "javascript",
    user: "Chad",
  },
  {
    skill: "javascript",
    user: "Bill",
  },
  {
    skill: "css",
    user: "Sue",
  },
  {
    skill: "javascript",
    user: "Sue",
  },
  {
    skill: "html",
    user: "Sue",
  },
];
 // array of objects
 // rip the skills 

const getSkills = endorsements => {
  // Result
  // [
  // { skill: 'javascript', user: ['Chad', 'Bill', 'Sue'], count: 3 },
  // { skill: 'css', user: ['Sue', 'Bill'], count: 2 },
  // { skill: 'html', user: ['Sue'], count: 1 }
  // ];
  let arr = [];
  let map = {};
  for (let i = 0; i < endorsements.length; i++) {
    if (!map.hasOwnProperty(endorsements[i].skill)) {
      map[endorsements[i].skill] = {
        users: [endorsements[i].user],
        count: 1
      }
    } else {
      map[endorsements[i].skill].users.push(endorsements[i].user);
      map[endorsements[i].skill].count++;
    }
  }
  for (const prop in map) {
    arr.push({skill: prop, users: map[prop].users, count: map[prop].count});
  }

  return arr.sort((a, b) => a.count < b.count);
  
  
  
};

console.log(getSkills(endorsements));