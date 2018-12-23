class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);


//Example:

// class Cat extends Animal {
//   constructor(name, usesLitter) {
//     super(name);
//     this._usesLitter = usesLitter;
//   }
// }

// The extends keyword makes the methods of the animal class available inside the cat class.
// The constructor, called when you create a new Cat object, accepts two arguments, name and usesLitter.
// The super keyword calls the constructor of the parent class. In this case, super(name) passes the name argument of the Cat class to the constructor of the Animal class. When the Animal constructor runs, it sets this._name = name; for new Cat instances.
// _usesLitter is a new property that is unique to the Cat class, so we set it in the Cat constructor.

//Using the sub class object and extending it to the parent object: Hospital Employee.
