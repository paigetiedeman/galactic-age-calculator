export default class Age {
  constructor(inputAge, lifestyle) {
  this.inputAge = inputAge;
  this.lifestyle = lifestyle;
  this.yearsLeft = 0;
  this.lifeExpect = 84;
}
earthAge() {
  return this.earthYears = this.inputAge;
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
  if (this.lifestyle === "healthy"){
    this.lifeExpect;
  } else if (this.lifestyle === "average"){
    this.lifeExpect -= 10;
  } else {
    this.lifeExpect -= 20;
  }
  return this.lifeExpect;
}

earthLifeLeft(){
  if (this.lifeExpect - this.earthYears > 0){
    return this.lifeExpect - this.earthYears;
  }
}
};