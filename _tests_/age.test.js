import Age from "./../src/js/Age.js";

describe("Age", () => {
  let age;
  let age2;

  beforeEach(() => {
    age = new Age(20, 84);
    age2 = new Age(100, 84);
  })
  test("should return age on Earth", () => {
    expect(age.earthAge()).toEqual(20);
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
  test('should return years left on earth', () => {
    expect(age.earthLifeLeft()).toEqual(64);
  })
  test('should return years left on Mercury', () => {
    expect(age.mercuryLifeLeft()).toBeLessThan(1);
  })
  test('should return years left on Venus', () => {
    expect(age.venusLifeLeft()).toBe(32);
  })
  test('should return years left on Mars', () => {
    expect(age.marsLifeLeft()).toBe(138);
  })
  test('should return years left on Jupiter', () => {
    expect(age.jupiterLifeLeft()).toBe(976);
  })
  test('should return years past life expectancy', () => {
    expect(age2.earthLifeLeft()).toEqual(16);
  })
  test('should return years past life expectancy for Mercury', () => {
    expect(age2.mercuryLifeLeft()).toEqual(80);
  })
  test('should return years past life expectancy for Venus', () => {
    expect(age2.venusLifeLeft()).toEqual(48);
  })
  test('should return years past life expectancy for Mars', () => {
    expect(age2.marsLifeLeft()).toEqual(58);
  })
  test('should return years past life expectancy for Jupiter', () => {
    expect(age2.jupiterLifeLeft()).toEqual(896);
  })
})
//Tests can be DRY'd additionally but leaving as is for grading purposes"