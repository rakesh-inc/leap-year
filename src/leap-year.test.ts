import { LeapYearChecker } from "./leap-year";

describe("LeapYearChecker", () => {
  it("should return false when number is not divisible by 4", () => {
    const leapYearChecker = new LeapYearChecker();
    expect(leapYearChecker.isLeapYear(1997)).toBe(false);
  });
});
