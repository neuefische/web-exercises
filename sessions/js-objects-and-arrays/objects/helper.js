export default function checkConditions(...conditions) {
    const allConditionsTrue = conditions.every(
      ([firstValueToCompare, secondValueToCompare, variableName]) => {
        if (firstValueToCompare === secondValueToCompare) {
          return true;
        } else {
          console.error(
            `expected: ${variableName} equals ${secondValueToCompare}, currently: ${variableName} equals ${firstValueToCompare}.`,
          );
          return false;
        }
      },
    );
    if (allConditionsTrue) {
      console.log('well done');
    }
  }
  
  export function checkKeys(object, valuesToCheck) {
    return valuesToCheck.every(value => Object.keys(object).includes(value));
  }
  