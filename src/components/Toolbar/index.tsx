import React, { FC } from 'react';
import { WrapperToolbar, Clear } from './styled';
import FilterButton, { NameType } from './FilterButton';

interface ToolbarProps {
	count: number;
	clearCompleted: () => void;
	filter: (s: NameType) => void;
}

export const Toolbar: FC<ToolbarProps> = ({ count, clearCompleted, filter }) => (
	<WrapperToolbar>
		<div>{count} items left</div>
		<div>
			<FilterButton title="All" name="all" defaultChecked onChange={() => filter('all')} />
			<FilterButton title="Active" name="active" onChange={() => filter('active')} />
			<FilterButton title="Completed" name="completed" onChange={() => filter('completed')} />
		</div>
		<Clear onClick={clearCompleted}>
			<i className="icon-refresh" />
			Clear completed
		</Clear>
	</WrapperToolbar>
);
export default Toolbar;
