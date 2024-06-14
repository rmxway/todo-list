import { render } from '@testing-library/react';
import { Todo } from './';

describe('Todo', () => {
	it('Render is fine', () => {
		const { container } = render(<Todo id={1} completed message="Issue #1" onChange={() => null} />);

		expect(container).toMatchSnapshot();
	});
});
