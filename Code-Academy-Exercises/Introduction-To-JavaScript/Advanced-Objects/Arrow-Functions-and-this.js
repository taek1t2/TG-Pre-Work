const robot = {
  energyLevel: 100,
  checkEnergy(){
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();


//using a ES6 shorthand or longhand format.
//ES6
//  const goat = {
//   name: 'Billy',
//   color: 'biege',
//   giveDetails(){
//     console.log(`${this.name} is a ${this.color} goat.`)
//   }
// }
// longhand: ": function" word is added.
