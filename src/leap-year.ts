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
    const isDivisibleBy4 = this.divisibilityChecker.isDivisibleBy(year, 4);
    const isDivisibleBy100 = this.divisibilityChecker.isDivisibleBy(year, 100);
    const isDivisibleBy400 = this.divisibilityChecker.isDivisibleBy(year, 400);

    return (isDivisibleBy4 && !isDivisibleBy100) || isDivisibleBy400;
  }
}
