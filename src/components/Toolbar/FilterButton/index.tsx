import { ButtonHTMLAttributes, FC, InputHTMLAttributes, PropsWithChildren } from 'react';
import { FilterButtonLabel } from './styled';

export type NameType = 'all' | 'active' | 'completed';

interface FilterButtonProps extends React.ButtonHTMLAttributes<HTMLInputElement> {
	name: NameType;
	title: string;
}

export const FilterButton: FC<FilterButtonProps> = ({ name, title, ...props }) => (
	<FilterButtonLabel htmlFor={name}>
		<input type="radio" name="filter" id={name} {...props} />
		{title}
	</FilterButtonLabel>
);
export default FilterButton;
