import styled from 'styled-components';

export default styled.button`
	background-color: ${props => (props.isActive ? '#333' : 'lightgray')};
	${props => props.isActive && 'color: white;'}
	border: 1px solid black;
	width: 100%;
`;
