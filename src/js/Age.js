export default class Age {
  constructor(inputAge, lifestyle) {
  this.inputAge = inputAge;
  this.lifestyle = lifestyle;
}
mercuryAge(){
  return this.mercuryYears = Math.round(this.inputAge / .24); 
}
venusAge(){
  return this.venusYears = Math.round(this.inputAge / .62);
}

marsAge(){
  return this.marsYears = Math.round(this.inputAge /1.88);
}

jupiterAge(){
  return this.jupiterYears = Math.round(this.inputAge / 11.86);
}

lifeExpectancy(){
  this.lifeExpect = 84;
  if (this.lifestyle === "healthy"){
    return this.lifeExpect;
  } else if (this.lifestyle === "average"){
    return this.lifeExpect -= 10;
  }
}
};