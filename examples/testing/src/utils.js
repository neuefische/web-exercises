export function formatUser({ firstName, lastName }) {
  if (!firstName && !lastName) {
    return "Mr. X";
  }
  if (!lastName) {
    return firstName;
  }
  return `${firstName} ${lastName}`;
}
