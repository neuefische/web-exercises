import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navigation from './Navigation';

describe('Navigation', () => {
	it('renders a navigation with two buttons', () => {
		render(<Navigation />);

		const playButton = screen.getByRole('button', {name: /play/i});
		const historyButton = screen.getByRole('button', {name: /history/i});

		expect(playButton).toBeInTheDocument();
		expect(historyButton).toBeInTheDocument();
	});

	it('calls callback with page name', () => {
		const navigateCallback = jest.fn();
		render(<Navigation onNavigate={navigateCallback} currentPage="Play" />);

		const playButton = screen.getByRole('button', {name: /play/i});
		userEvent.click(playButton);

		expect(navigateCallback).toHaveBeenCalledWith('play');
	});
});
