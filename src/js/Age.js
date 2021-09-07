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
  return this.marsYears = Math.round(this.inputAge / 1.88);
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
  this.yearsLeft = this.lifeExpect - this.inputAge;
  if (this.yearsLeft < 0) {
    return Math.round(this.inputAge - this.lifeExpect);
  }
    return this.yearsLeft;
  }
mercuryLifeLeft(){
  this.yearsLeft = Math.round(this.lifeExpect*.24 -this.inputAge);
  if (this.yearsLeft < 0) {
    return Math.abs(this.yearsLeft);
  }
  return this.yearsLeft;
}
venusLifeLeft(){
  this.yearsLeft = Math.round(this.lifeExpect*.62 - this.inputAge);
  if (this.yearsLeft < 0) {
    return Math.abs(this.yearsLeft);
  }
  return this.yearsLeft;
}
marsLifeLeft(){
  this.yearsLeft = Math.round(this.lifeExpect*1.88 - this.inputAge);
  if (this.yearsLeft < 0) {
    return Math.abs(this.yearsLeft);
  }
  return this.yearsLeft;
}
jupiterLifeLeft(){
  this.lifeExpect = Math.round(this.lifeExpect*11.86 - this.inputAge);
  return this.lifeExpect;
}
};