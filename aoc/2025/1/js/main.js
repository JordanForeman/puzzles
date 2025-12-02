export class Dial {
  constructor(value = 50) {
    this.value = value;
    this.rotations = 0;
  }

  /**
   * Turns the dial by {n} "leftward" (eg. negative)
   *
   * @param {number} n
   * @returns {undefined}
   */
  turnLeft(n) {
    const remainder = n % 100;
    const fullRotations = (n - remainder) / 100;

    const nextValue = this.value - remainder;

    if (nextValue < 0) {
      this.rotations += 1;
      this.value = 100 + nextValue;
    } else {
      this.value = nextValue;
    }

    // console.log({ n, remainder, fullRotations, nextValue })

    this.rotations += fullRotations;
  }

  /**
   * Turns the dial by {n} "rightward" (eg. positive)
   *
   * @param {number} n
   * @returns {undefined}
   */
  turnRight(n) {
    const remainder = n % 100;
    const fullRotations = (n - remainder) / 100;

    const nextValue = this.value + remainder;

    if (nextValue >= 100) {
      if (this.value !== 0) this.rotations += 1;
      this.value = nextValue - 100;
    } else {
      this.value = nextValue;
    }

    this.rotations += fullRotations;
  }

  /**
   * Returns whether or not the current dial value is zero
   *
   * @returns {boolean} whether or not the current value is zero
   */
  get isZero() {
    this.value === 0;
  }
}


export function solve(input, useAdvancedEncryption = false) {
  let totalZeroes = 0;

  const dial = new Dial(50);
  const turns = input
    .trim()
    .split('\n')
    .map((str) => {
      const asString = str.trim();
      const direction = asString[0].toUpperCase();
      const value = parseInt(asString.slice(1));

      return { direction, value };
    });

  turns.forEach(({ direction, value }) => {
    if (direction === 'L') {
      dial.turnLeft(value);
    } else { // direction === 'R'
      dial.turnRight(value)
    }

    if (dial.value === 0) totalZeroes++;
  });

  const result = useAdvancedEncryption ? dial.rotations : totalZeroes;

  console.log({ result });
  return result;
}

