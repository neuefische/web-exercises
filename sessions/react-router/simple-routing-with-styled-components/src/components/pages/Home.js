import StyledPageWrapper from '../styled/StyledPageWrapper';

export default function Home({onGotoPage}) {
	return (
		<StyledPageWrapper>
			<h1>Home Page</h1>
			<p>
				<a href="/team">This is our Team</a>
			</p>
		</StyledPageWrapper>
	);
}
