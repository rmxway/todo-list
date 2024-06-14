import { render } from '@testing-library/react';
import { FilterButton } from './';

describe('FilterButton', () => {
	it('Render is fine', () => {
		const { container } = render(<FilterButton name="active" title="Active" />);

		expect(container).toMatchSnapshot();
	});
});
