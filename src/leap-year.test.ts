import { LeapYearChecker } from "./leap-year";

describe("LeapYearChecker", () => {
  let leapYearChecker: LeapYearChecker;
  beforeEach(() => {
    leapYearChecker = new LeapYearChecker();
  });

  it("should return false when number is not divisible by 4", () => {
    expect(leapYearChecker.isLeapYear(1997)).toBe(false);
  });

  it("should return true when year is divisible by 4", () => {
    expect(leapYearChecker.isLeapYear(1996)).toBe(true);
  });
});
