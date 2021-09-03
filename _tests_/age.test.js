import Age from "./../src/js/Age.js";

describe("Age", () => {
  let age;

  beforeEach(() => {
    age = new Age(20);
  })

  test('should return galacticAge of user on Mercury', () => {
    expect(age.galacticAge("Mercury")).toEqual(83);
  }) 
  test('should return galacticAge of user on Venus', () => {
    expect(age.galacticAge("Venus")).toEqual(32);
  })
  test('should return galacticAge of user on Mars', () => {
    expect(age.galacticAge("Mars")).toEqual(11);
  })
  test('should return galacticAge of user on Jupiter', () => {
    expect(age.galacticAge("Jupiter")).toEqual(2);
  })
  test('should return life expectancy based on lifestyle', () => {
    age = new Age (30)
    expect(age.lifeExpectancy("healthy")).toEqual(10);
  })
  test('should return life expectancy for mercury based on lifestyle', () => {
    age.galacticAge("Mercury")
    expect(lifeExpectancy("healthy")).toEqual(63)
  })
})