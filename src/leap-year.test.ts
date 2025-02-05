import { DivisibilityChecker, LeapYearChecker } from "./leap-year";

describe("LeapYearChecker", () => {
  let leapYearChecker: LeapYearChecker;
  beforeEach(() => {
    leapYearChecker = new LeapYearChecker(new DivisibilityChecker());
  });

  it("should return false when number is not divisible by 4", () => {
    expect(leapYearChecker.isLeapYear(1997)).toBe(false);
  });

  it("should return true when year is divisible by 4", () => {
    expect(leapYearChecker.isLeapYear(1996)).toBe(true);
  });

  it("should return true when a year is divisible by 400", () => {
    expect(leapYearChecker.isLeapYear(1600)).toBe(true);
  });

  it("should return false when a year is divisible by 4 but not 100", () => {
    expect(leapYearChecker.isLeapYear(1800)).toBe(false);
  });
});
