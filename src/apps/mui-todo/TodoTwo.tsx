import { AppBar, Grid, Paper, Toolbar, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Todo } from '../todo/types';
import MUIForm from './MUIForm';
import TodoList from './TodoList';

interface Props {}

const TodoTwo: React.FunctionComponent<Props> = () => {
	let initialTodos: Todo[];
	const localStorage = window.localStorage.getItem('todos');

	if (localStorage !== null) {
		initialTodos = JSON.parse(localStorage) as Todo[];
	} else {
		initialTodos = [];
	}
	const [todos, setTodos] = useState<Todo[]>(initialTodos);

	useEffect(() => {
		window.localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const addTodo = (newTodoTxt: string): void => {
		setTodos([
			...todos,
			{ id: uuid(), todoText: newTodoTxt, completed: false },
		]);
	};

	const removeTodo = (id: string): void => {
		const updatedTodos = todos.filter((todo) => todo.id !== id);
		setTodos(updatedTodos);
	};

	const toggleTodo = (id: string): void => {
		const updatedTodos = todos.map((todo) =>
			todo.id === id ? { ...todo, completed: !todo.completed } : todo
		);
		setTodos(updatedTodos);
	};

	const editTodo = (id: string, newText: string): void => {
		const updatedTodos = todos.map((todo) =>
			todo.id === id ? { ...todo, todoText: newText } : todo
		);
		setTodos(updatedTodos);
	};

	return (
		<Paper
			style={{
				padding: 0,
				margin: 0,
				height: '100vh',
				width: '100%',
				backgroundColor: '#fafafa',
			}}
			elevation={0}
		>
			<AppBar color="primary" position="static" style={{ height: '64px' }}>
				<Toolbar>
					<Typography color="inherit">
						Todo Two with Typescript React and MUI
					</Typography>
				</Toolbar>
			</AppBar>
			<Grid container justify="center" style={{ marginTop: '1rem' }}>
				<Grid item xs={11} md={8} lg={4}>
					<MUIForm submit={addTodo} />

					<TodoList
						toggleTodo={toggleTodo}
						deleteTodo={removeTodo}
						editTodo={editTodo}
						todos={todos}
					/>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default TodoTwo;
