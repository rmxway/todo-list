import { FC } from 'react';
import { CheckboxTodo } from './styled';

export interface TodoProps extends Pick<React.HTMLAttributes<HTMLElement>, 'onChange'> {
	id: number;
	message: string;
	completed: boolean;
}

export const Todo: FC<TodoProps> = ({ id, message, completed, ...props }) => {
	return (
		<CheckboxTodo htmlFor={id.toString()}>
            <i className='icon-check' />
			<input type="checkbox" id={id.toString()} name={id.toString()} checked={completed} {...props} />
			<span>{message}</span>
		</CheckboxTodo>
	);
};

export default Todo;
