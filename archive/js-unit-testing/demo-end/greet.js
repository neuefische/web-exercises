export function greet(name = "stranger") {
  if (name === "<YOUR-NAME>") {
    return "Hello coach!";
  }

  return `Hello ${name}!`;
}
