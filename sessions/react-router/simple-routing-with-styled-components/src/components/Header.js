import StyledHeader from './styled/StyledHeader';
import StyledNav from './styled/StyledNav';

export default function Header() {
	return (
		<StyledHeader>
			<StyledNav>
				<a href="/">Home</a>
				<a href="/product">Product</a>
				<a href="/team">Team</a>
				<a href="/account">Account</a>
			</StyledNav>
		</StyledHeader>
	);
}
