// You can change this to test different types
const data = ["1", "2", "3"]

switch (typeof data) {
    case 'undefined':
      console.log("undefined!");
      break;
    case 'number':
      if (isNaN(data)) {
        console.log("not a number!");
      } else {
        console.log("number!");
      }
      break;
    case 'string':
      console.log("string!");
      break;
    case 'boolean':
      console.log("boolean!");
      break;
    case 'function':
      console.log("function!");
      break;
    case 'object':
      if (data === null) {
        console.log("null!");
      } else if (Array.isArray(data)) {
        console.log("array!");
      } else {
        console.log("object!");
      }
      break;
    default:
      console.log("I have no idea!");
      break;
  }