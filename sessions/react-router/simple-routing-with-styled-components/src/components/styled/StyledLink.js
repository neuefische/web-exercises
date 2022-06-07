import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
	padding: 0.5rem;
	color: white;
	background: darkslategray;
	border: none;
	text-decoration: none;

	&:hover {
		background: darkgreen;
	}
`;

export default StyledLink;
