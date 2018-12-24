const Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};
console.log(Airplane.displayAirplane());


//wrap any collection of data and functions in an object, and export the object using module.exports
