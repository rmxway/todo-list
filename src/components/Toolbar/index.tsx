import React, { FC } from 'react';

interface ToolbarProps {
	count: number;
	clearCompleted?: () => void;
	filter?: () => void;
}

export const Toolbar: FC<ToolbarProps> = ({ count, clearCompleted, filter }) => <div>Toolbar: {count} items left</div>;
export default Toolbar;
