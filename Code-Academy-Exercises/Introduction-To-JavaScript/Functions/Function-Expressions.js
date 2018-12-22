const plantNeedsWater = function (day) {
  if (day === 'Wednesday'){
    return true;
  } else {
    return false;
  };
};
plantNeedsWater('Tuesday');
console.log(plantNeedsWater('Tuesday'));


//function expression: after defining the variable followed by the = to call a function with (parameters).
//this is a function with no name or anonymous function.
