export default class Age {
  constructor(inputAge, lifestyle) {
  this.inputAge = inputAge;
  // this.lifeExpect = lifeExpect;
  this.lifestyle = lifestyle;
}

galacticAge(planet){
  if (planet === "Mercury") {
    return Math.round(this.inputAge / .24)
  } else if (planet === "Venus"){
    return Math.round(this.inputAge / .62)
  } else if (planet === "Mars"){
    return Math.round(this.inputAge / 1.88)
  } else if (planet === "Jupiter"){
    return Math.round(this.inputAge / 11.86)
  }
}
lifeExpectancy(){

}
};