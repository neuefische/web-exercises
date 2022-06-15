import {render, screen} from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
	it('renders a label and an input', () => {
		render(<Input labelText="Email" placeholder="Write here" name="email" />);

		const input = screen.getByLabelText('Email');

		expect(input).toHaveAttribute('placeholder', 'Write here');
		expect(input).toHaveAttribute('name', 'email');
	});
});
