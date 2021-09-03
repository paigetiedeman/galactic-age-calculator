export default class Age {
  constructor(inputAge) {
  this.inputAge = inputAge;
}
galacticAge(planet){
  if (planet === "Mercury") {
    return Math.round(this.inputAge / .24)
  } 
}

};