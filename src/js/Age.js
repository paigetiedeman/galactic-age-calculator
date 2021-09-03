export default class Age {
  constructor(inputAge) {
  this.inputAge = inputAge;
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

lifeExpectancy(lifestyle){
  if (lifestyle === "healthy"){
    return this.inputAge -= 20;
  } else {
    return 
  }
}
};