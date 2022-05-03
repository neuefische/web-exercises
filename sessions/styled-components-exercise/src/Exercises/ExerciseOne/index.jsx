import styled, { css } from 'styled-components';
/*
EXERCISE 1

[x] Create a button as styled-component and call it "StyledButton"
[x] Think of at least 3 variants for this button
[ ] Each variant should have its own
    [ ] color
    [ ] background
    [ ] border
    [ ] hover
[ ] Choose styles for a disabled version of one of your created button variants
[ ] Decide for one of your buttons variants as default
[ ] Move StyledButton to a separate file and import it.

REMEMBER: Our StyledComponents are ES6 Strings.
We can always interpolate JavaScript into them like this:

${ (props) => { return a string including css } }

*/

const StyledButton = styled.button`
	min-width: 60px;
	min-height: 30px;
	padding: 10px;
	border-radius: 7px;
	cursor: pointer;
`;

export default function ExerciseOne() {
	return (
		<>
			<StyledButton type="button" variant="text">
				text
			</StyledButton>
			<StyledButton type="button" variant="outlined">
				outlined
			</StyledButton>
			<StyledButton type="button" variant="contained">
				contained
			</StyledButton>
			<StyledButton disabled type="button">
				disabled
			</StyledButton>
		</>
	);
}

// ADDITIONAL INFORMATION - BUTTON-VARIANTS

/*
Text buttons are typically used for less-pronounced actions,
including those located: in dialogs, in cards.
In cards, text buttons help maintain an emphasis on card content.
*/

/*
Outlined buttons are medium-emphasis buttons.
They contain actions that are important
but aren't the primary action in an app.

Outlined buttons are also a lower emphasis alternative to contained
buttons, or a higher emphasis alternative to text buttons.
*/

/*
Contained buttons are high-emphasis,
distinguished by their use of elevation and fill.
They contain actions that are primary to your app.
*/
