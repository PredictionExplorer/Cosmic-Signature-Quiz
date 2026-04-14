/**
 * Fisher–Yates shuffle (in-place). Returns the same array reference.
 */
export function shuffleInPlace<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Immutable shuffle copy */
export function shuffle<T>(arr: readonly T[]): T[] {
  return shuffleInPlace([...arr]);
}
