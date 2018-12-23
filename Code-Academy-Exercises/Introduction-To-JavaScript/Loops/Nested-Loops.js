let bobsFollowers = ['Eli', 'Ron', 'Mike', 'Jesse'];
let tinasFollowers = ['Eli', 'Ron', 'Alyssa'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};


//nesting for loops with .length property and function method.
