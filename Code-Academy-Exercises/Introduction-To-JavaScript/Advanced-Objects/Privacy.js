const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot._energyLevel = 'high';
robot.recharge();


//Accessing and updating properties is fundamental in working with objects.
//privacy in objects, we define it as the idea that only certain properties should be mutable or able to change in value.
//common convention: '_' underscore before the name of a property to mean that the property should not be altered.
