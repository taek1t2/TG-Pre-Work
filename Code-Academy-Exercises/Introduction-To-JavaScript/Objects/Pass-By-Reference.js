let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below

let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil';
}

let remotelyDisable = obj => {
  obj.disabled = true;
}

greenEnergy(spaceship);

remotelyDisable(spaceship);

console.log(spaceship)

//objects are passed by reference: passing a variable assigned to an object into a function as an argument.
//As a result, functions which change object properties actually mutate the object permanently (even when the object is assigned to a const variable).
