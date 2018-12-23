const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const { functionality } = robot;
robot.functionality.beep();


//extract key-value pairs from objects and save them as properties. save some time.
//destructured assigment: create a variable with the name of an object's key that is wrapped in curly braces { } and assign to it the object.
