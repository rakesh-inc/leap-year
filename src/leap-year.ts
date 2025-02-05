interface IDivisibilityChecker {
  isDivisibleBy(number: number, divisor: number): boolean;
}

export class DivisibilityChecker implements IDivisibilityChecker {
  isDivisibleBy(number: number, divisor: number): boolean {
    return number % divisor === 0;
  }
}

export class LeapYearChecker {
  constructor(private divisibilityChecker: DivisibilityChecker) {}
  isLeapYear(year: number): boolean {
    return (
      (this.divisibilityChecker.isDivisibleBy(year, 4) &&
        !this.divisibilityChecker.isDivisibleBy(year, 100)) ||
      this.divisibilityChecker.isDivisibleBy(year, 400)
    );
  }
}
