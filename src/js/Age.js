export default class Age {
  constructor(inputAge, lifeExpect) {
  this.inputAge = inputAge;
  // this.lifestyle = lifestyle;
  this.lifeExpect = lifeExpect;
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

// WIP: having difficulty connecting before time is up
// lifeExpectancy(){
//   if (this.lifestyle === "healthy"){
//     this.lifeExpect;
//   } else if (this.lifestyle === "average"){
//     this.lifeExpect -= 10;
//   } else {
//     this.lifeExpect -= 20;
//   }
//   return this.lifeExpect;
// }

earthLifeLeft(){
  this.lifeExpect = this.lifeExpect - this.inputAge;
    return this.lifeExpect;
  }
mercuryLifeLeft(){
  this.lifeExpect = this.lifeExpect*.24 -this.inputAge;
  return this.lifeExpect;
}
venusLifeLeft(){
  this.lifeExpect = this.lifeExpect*.62 - this.inputAge;
  return this.lifeExpect;
}
};