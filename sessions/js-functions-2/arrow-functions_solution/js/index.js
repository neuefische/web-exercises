console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible
*/
/*
function getCurrentHour() {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return '12am';
  } else if (currentHour === 12) {
    return '12pm';
  } else if (currentHour <= 11) {
    return currentHour + 'am';
  } else {
    return currentHour - 12 + 'pm';
  }
}
*/

const getCurrentHour = () => {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return '12am';
  } else if (currentHour === 12) {
    return '12pm';
  } else if (currentHour <= 11) {
    return currentHour + 'am';
  } else {
    return currentHour - 12 + 'pm';
  }
};

console.log('Get current Hour', getCurrentHour());

/*
function getVectorLength(x, y, z) {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
}
*/

const getVectorLength = (x, y, z) => {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
};

console.log('Get vector length', getVectorLength(2, 2, 2));

/*
function cleanInput(string) {
  return string.toLowerCase().trim();
}
*/

const cleanInput = string => {
  return string.toLowerCase().trim();
};

console.log('Clean input', cleanInput('shdsidhd OH'));

/*
Rewrite the following arrow functions as classic functions.
*/
/*
const isOddAndSmall = number => {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
};
*/

function isOddAndSmall(number) {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
}
console.log('Is odd and small', isOddAndSmall(7));

// const add3 = (a, b, c) => a + b + c;

function add3(a, b, c) {
  return a + b + c;
}
console.log('Add three', add3(7, 8, 9));

//const repeat10 = string => string.repeat(10);

function repeat10(string) {
  return string.repeat(10);
}

console.log('Repreat Ten', repeat10('J'));
