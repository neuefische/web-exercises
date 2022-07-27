import styled, { css } from 'styled-components';
import ExerciseOne from '../ExerciseOne';
/*
EXERCISE 2

[x] Import ExerciseOne as component
[x] Create a div as styled-Component and call it "StyledFlex"
[x] Wrap ExerciseOne in StyledFlex
[ ] Your StyledFlex Component should be capable of handling props for
    [ ] flex-direction
    [ ] justify-content
    [ ] align-items
    [ ] gap
Note: Use and keep the props, that are already written to the component
[ ] Decide for each of the props a default value
[ ] Move StyledFlex to a separate file and import it.
*/

const StyledFlex = styled.div`
	width: 100%;
	display: flex;
	/* Border was just set to see component*/
	border: 1px solid black;
`;

export default function ExerciseTwo() {
	return (
		<StyledFlex flexDirection="column" justifyContent="center" alignItems="center" gap="20px">
			<ExerciseOne />
		</StyledFlex>
	);
}
