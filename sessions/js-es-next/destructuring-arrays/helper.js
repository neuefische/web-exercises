export default function checkConditions(...conditions) {
    const allConditionsTrue = conditions.every(
      ([firstValueToCompare, secondValueToCompare, variableName]) => {
        if (firstValueToCompare === secondValueToCompare) {
          return true;
        } else {
          console.error(
            `expected ${variableName} to equal ${secondValueToCompare}, instead ${variableName} is ${firstValueToCompare}.`,
          );
          return false;
        }
      },
    );
    if (allConditionsTrue) {
      console.log('well done');
    }
  }
  