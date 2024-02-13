export function shuffleArray(array) {
  for (let index = array.length - 1; index > 0; index--) {
    const swapWithIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[swapWithIndex]] = [array[swapWithIndex], array[index]];
  }

  return array;
}
