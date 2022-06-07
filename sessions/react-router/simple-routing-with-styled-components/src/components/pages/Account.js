import StyledPageWrapper from '../styled/StyledPageWrapper';

export default function Account() {
	function handleLoginClick() {
		console.log('TODO: go to page "/" ');
	}

	return (
		<StyledPageWrapper>
			<h1>Account Page</h1>
			<button type="button" onClick={handleLoginClick}>
				Login
			</button>
		</StyledPageWrapper>
	);
}
