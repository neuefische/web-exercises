document.querySelectorAll('input[type="radio"]').forEach((element) => {
  element.addEventListener("click", (event) => {
    // current radio button element
    const clickedRadioButton = event.target

    const questionName = clickedRadioButton.name

    const truthyLabel = document.querySelector(`label[for="truthy-${questionName}"]`)
    const falsyLabel = document.querySelector(`label[for="falsy-${questionName}"]`)

    const clickedLabel = document.querySelector(`label[for="${clickedRadioButton.id}"]`)

    // clickedAnswer as boolean
    const clickedAnswer = clickedLabel.textContent === "truthy"

    // evaluate the legend text as a boolean
    const correctAnswer = !!eval(clickedLabel.closest("fieldset").querySelector("legend").textContent)

    // set border color: correct answer -> green, incorrect answer -> red
    const borderColor = (correctAnswer === clickedAnswer) ? 'green' : 'red'

    // 'underline' the correct answer, indicating if the user was right by the used color
    if (correctAnswer) {
        truthyLabel.style = `border-bottom: 3px solid ${borderColor}`
        falsyLabel.style = "border: none"
    } else {
        falsyLabel.style = `border-bottom: 3px solid ${borderColor}`
        truthyLabel.style = "border: none"
    }
  });
});
