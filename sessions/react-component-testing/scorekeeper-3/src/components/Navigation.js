import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PAGES from '../assets/pages';

export default function Navigation({onNavigate, currentPage}) {
	return (
		<Nav>
			<Button isActive={currentPage === PAGES.PLAY} onClick={() => onNavigate(PAGES.PLAY)}>
				Play
			</Button>
			<Button
				isActive={currentPage === PAGES.HISTORY}
				onClick={() => onNavigate(PAGES.HISTORY)}
			>
				History
			</Button>
		</Nav>
	);
}

const Nav = styled.nav`
	display: flex;
`;
