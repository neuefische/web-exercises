export function getAnimal(animal) {
    if(animal === undefined) {
        return "I do not like animals at all!"
    } else if (animal === "cats") {
        return "I totally love cats!"
    } else {
        return `I like ${animal}!`
    }
}
