export default class Age {
  constructor(inputAge) {
  this.inputAge = inputAge;
}

galacticAge(planet){
  if (planet === "Mercury") {
    return Math.round(this.inputAge / .24);
  } else if (planet === "Venus"){
    return Math.round(this.inputAge / .62)
  } else if (planet === "Mars"){
    return Math.round(this.inputAge / 1.88)
  } else if (planet === "Jupiter"){
    return Math.round(this.inputAge / 11.86)
  }
}
lifeExpectancy(lifestyle){
  if (lifestyle === "healthy"){
    return this.inputAge -= 20;
  } else {
    return 
  }
}
};