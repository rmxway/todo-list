import { useMemo, useRef, useState } from 'react';
import { TodoWrapper } from './styled';
import { todos as staticTodos } from '@/src/todos';
import { Todo, TodoProps, Toolbar } from '@/src/components';

export const Todos = () => {
	const [todos, setTodos] = useState<TodoProps[]>(staticTodos);
	const inputRef = useRef<HTMLInputElement | null>(null);

	const count = useMemo(() => todos.filter((item) => !item.completed).length, [todos]);

	const checkTodo = (idKey: number) => {
		let index = 0;
		const newTodos = [...todos];
		const N = todos.find((item, idx) => {
			const condition = item.id === idKey;
			if (condition) index = idx;
			return condition;
		}) as TodoProps;

		N.completed = !N.completed;
		newTodos[index] = N;
		setTodos(newTodos);
	};

	const addTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
		const message = e.currentTarget.value;
		if (e.key === 'Enter') {
			setTodos((prev) => [
				...prev,
				{
					id: todos.length + 1,
					message,
					completed: false
				}
			]);
			if (inputRef.current) inputRef.current.value = '';
		}
	};

	return (
		<TodoWrapper>
			<i className="icon-angle-down" />
			<input ref={inputRef} type="text" placeholder="What needs to be done?" onKeyUp={addTodo} />

			{todos.map((todo) => (
				<Todo key={todo.id} {...todo} onChange={() => checkTodo(todo.id)} />
			))}

			<Toolbar count={count} />
		</TodoWrapper>
	);
};

export default Todos;
