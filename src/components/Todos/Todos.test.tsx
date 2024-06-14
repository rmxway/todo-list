import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Todos } from './';

const user = userEvent.setup();

describe('Todos', () => {
	it('Render is fine', () => {
		const { container } = render(<Todos />);

		expect(container).toMatchSnapshot();
	});

	it('Checked is fine', async () => {
		const { getByTestId } = render(<Todos />);
		const checkBoxFirstElement = getByTestId('1');

		await user.click(checkBoxFirstElement);

		expect(checkBoxFirstElement).toBeChecked();
	});

	it('Add new todo to normal', async () => {
		const { container, getByTestId } = render(<Todos />);
		const mainInput = getByTestId('main-input');
		const prevLength = container.querySelectorAll('[type="checkbox"]').length;

		await user.type(mainInput, 'New todo');
		await user.keyboard('[Enter]');

		const currentLength = container.querySelectorAll('[type="checkbox"]').length;

		expect(currentLength).toEqual(prevLength + 1);
	});
});
