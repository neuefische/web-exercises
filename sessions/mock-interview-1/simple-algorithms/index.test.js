const {
	maxOfTwoNumbers,
	findLongestWord,
	sumNumbers,
	averageNumbers,
	averageWordLength,
	uniquifyArray,
	doesWordExist,
	howManyTimes,
	sum,
	avg,
	greatestProduct
  } = require('./index');
  
  describe('Utility Functions Tests', () => {
  
	test('maxOfTwoNumbers correctly identifies the maximum of two numbers', () => {
	  expect(maxOfTwoNumbers(1, 2)).toBe(2);
	  expect(maxOfTwoNumbers(2, 2)).toBe(2);
	  expect(maxOfTwoNumbers(-1, -3)).toBe(-1);
	});
  
	test('findLongestWord correctly identifies the longest word in an array', () => {
	  const words = ["Jaws", "Up", "Alien", "Gravity", "Inception", "Psycho"];
	  expect(findLongestWord(words)).toBe("Inception");
	  expect(findLongestWord(["word", "wordy", "wordiest"])).toBe("wordiest");
	  expect(findLongestWord([])).toBeNull();
	});
  
	test('sumNumbers correctly calculates the sum of numbers in an array', () => {
	  const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
	  expect(sumNumbers(numbers)).toBe(87);
	  expect(sumNumbers([])).toBe(0);
	});
  
	test('averageWordLength correctly calculates the average length of words in an array', () => {
	  const words = ["eclipse", "harmony", "cascade"];
	  expect(averageWordLength(words)).toBeCloseTo(7, 0);
	  expect(averageWordLength([])).toBeNull();
	});
  
	test('uniquifyArray correctly removes duplicates from an array', () => {
	  const words = ['crab', 'poison', 'contagious', 'simple', 'bring', 'sharp', 'playground', 'poison', 'communion', 'simple', 'bring'];
	  expect(uniquifyArray(words)).toEqual(['crab', 'poison', 'contagious', 'simple', 'bring', 'sharp', 'playground', 'communion']);
	  expect(uniquifyArray([])).toEqual([]);
	});
  
	test('doesWordExist checks if a word is in an array', () => {
	  const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
	  expect(doesWordExist(wordsFind, 'trouble')).toBe(true);
	  expect(doesWordExist(wordsFind, 'absent')).toBe(false);
	});
  
	test('howManyTimes counts the occurrence of a word in an array', () => {
	  const wordsCount = ['machine', 'matter', 'subset', 'trouble', 'starting', 'matter', 'eating', 'matter', 'truth', 'disobedience', 'matter'];
	  expect(howManyTimes(wordsCount, 'matter')).toBe(4);
	  expect(howManyTimes(wordsCount, 'machine')).toBe(1);
	  expect(howManyTimes(wordsCount, 'absent')).toBe(0);
	});
  
	test('sum correctly sums mixed arrays', () => {
	  const mixedArray = ["apple", 42, true, false];
	  expect(sum(mixedArray)).toBe(48);
	});
  
	test('greatestProduct calculates the greatest product of four adjacent numbers in the matrix', () => {
	  const matrix = [
		[1, 2, 3, 4, 5],
		[1, 20, 3, 4, 5],
		[1, 20, 3, 4, 5],
		[1, 20, 3, 4, 5],
		[1, 4, 3, 2, 1]
	  ];
	  expect(greatestProduct(matrix)).toBe(20 * 20 * 20 * 4);
	});
  
  });
  