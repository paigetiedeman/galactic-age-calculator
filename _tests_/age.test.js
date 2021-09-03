import Age from "./../src/js/Age.js";

describe("Age", () => {
  let age;

  beforeEach(() => {
    age = new Age(20, "healthy");
  })

  test('should return galacticAge of user on Mercury', () => {
    expect(age.mercuryAge()).toEqual(83);
  }) 
  test('should return galacticAge of user on Venus', () => {
    expect(age.venusAge()).toEqual(32);
  })
  test('should return galacticAge of user on Mars', () => {
    expect(age.marsAge()).toEqual(11);
  })
  test('should return galacticAge of user on Jupiter', () => {
    expect(age.jupiterAge()).toEqual(2);
  })
  test('should return life expectancy based on lifestyle of "healthy"', () => {
    expect(age.lifeExpectancy()).toEqual(84);
  })
  test ('should return life expectancy based on lifestyle of "average"', () => {
    let age2 = new Age(20, "average");
    expect(age2.lifeExpectancy()).toEqual(74);
  })
})