import { useEffect, useMemo, useRef, useState } from 'react';
import { TodoWrapper } from './styled';
import { todos as staticTodos } from '@/src/todos';
import { Todo, TodoProps, Toolbar } from '@/src/components';
import { NameType } from '../Toolbar/FilterButton';
import { CheckboxTodo } from '../Todo/styled';

export const Todos = () => {
	const [todos, setTodos] = useState<TodoProps[]>(staticTodos);
	const [filteredTodos, setFilteredTodos] = useState<TodoProps[]>(todos);
	const [filter, setFilter] = useState<NameType>('all');
	const inputRef = useRef<HTMLInputElement | null>(null);

	const count = useMemo(() => todos.filter((item) => !item.completed).length, [todos]);

	useEffect(() => {
		filterTodo(filter);
	}, [todos]);

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
			setTodos((prev) => {
				const newTodos = [
					...prev,
					{
						id: todos.length + 1,
						message,
						completed: false
					}
				];
				return newTodos;
			});
			if (inputRef.current) inputRef.current.value = '';
		}
	};

	const filterTodo = (type: NameType) => {
		setFilteredTodos((prev) => {
			if (type === 'all') return todos;
			if (type === 'active') return todos.filter((item) => !item.completed);
			if (type === 'completed') return todos.filter((item) => item.completed);
			return prev;
		});
	};

	const clearCompletedTodos = () => {
		setTodos((prev) =>
			prev.map((item) => ({
				...item,
				completed: false
			}))
		);
	};

	return (
		<TodoWrapper>
			<i className="icon-angle-down" />
			<input ref={inputRef} type="text" placeholder="What needs to be done?" onKeyUp={addTodo} data-testid="main-input" />

			{filteredTodos.length ? (
				filteredTodos.map((todo) => <Todo key={todo.id} {...todo} onChange={() => checkTodo(todo.id)} />)
			) : (
				<CheckboxTodo>
					<span>Not found</span>
				</CheckboxTodo>
			)}

			<Toolbar
				count={count}
				filter={(str) => {
					filterTodo(str);
					setFilter(str);
				}}
				clearCompleted={clearCompletedTodos}
			/>
		</TodoWrapper>
	);
};

export default Todos;
