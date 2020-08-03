import { List, Paper } from '@material-ui/core';
import React from 'react';
import { Todo } from '../todo/types';
import MUITodoItem from './MUITodoItem';

interface Props {
	todos: Todo[];
	deleteTodo: (a: string) => void;
	toggleTodo: (a: string) => void;
	editTodo: (a: string, txt: string) => void;
}

const TodoList: React.FunctionComponent<Props> = ({
	todos,
	toggleTodo,
	deleteTodo,
	editTodo,
}) => {
	if (todos.length > 0)
		return (
			<Paper>
				<List>
					{todos.map((todo) => (
						<MUITodoItem
							key={todo.id}
							toggleTodo={toggleTodo}
							completed={todo.completed}
							id={todo.id}
							editTodo={editTodo}
							deleteTodo={deleteTodo}
							todoText={todo.todoText}
						/>
					))}
				</List>
			</Paper>
		);
	return null;
};

export default TodoList;
