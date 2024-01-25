export const baseSymbols = ["🍍", "🍋", "🍇", "🍒", "🍉"];

export function getMaxCount(symbols) {
  // Count the number of times each symbol appears
  const counts = {};
  for (const symbol of symbols) {
    counts[symbol] = (counts[symbol] || 0) + 1;
  }

  // Return the maximum number of times a symbol appears
  return Math.max(...Object.values(counts));
}
