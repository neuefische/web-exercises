import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
	font-size: 1rem;
	padding: 0;
	background: none;
	border: none;
	color: white;
	cursor: pointer;
	text-decoration: none;

	&:hover {
		color: black;
	}
`;

export default StyledNavLink;
