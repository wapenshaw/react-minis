import {
	ListItem,
	ListItemText,
	Checkbox,
	ListItemSecondaryAction,
	IconButton,
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import React from 'react';
import { Todo } from '../todo/types';
import useToggle from './hooks/useToggle';
import EditTodoForm from './EditTodoForm';

interface Props extends Todo {
	deleteTodo: (a: string) => void;
	toggleTodo: (a: string) => void;
	editTodo: (a: string, txt: string) => void;
}

const MUITodoItem: React.FunctionComponent<Props> = ({
	todoText,
	completed,
	id,
	toggleTodo,
	editTodo,
	deleteTodo,
}) => {
	const [isEditing, toggleEdit] = useToggle(false);
	return (
		<ListItem style={{ height: '70px' }}>
			{isEditing ? (
				<EditTodoForm
					toggleEdit={toggleEdit}
					id={id}
					todoText={todoText}
					editTodo={editTodo}
				/>
			) : (
				<>
					<Checkbox
						onClick={() => toggleTodo(id)}
						tabIndex={-1}
						checked={completed}
					/>
					<ListItemText
						style={{ textDecoration: completed ? 'line-through' : 'none' }}
					>
						{todoText}
					</ListItemText>
					<ListItemSecondaryAction>
						<IconButton onClick={toggleEdit} aria-label="Edit">
							<Edit />
						</IconButton>
						<IconButton onClick={(_e) => deleteTodo(id)} aria-label="Deleted">
							<Delete />
						</IconButton>
					</ListItemSecondaryAction>
				</>
			)}
		</ListItem>
	);
};

export default MUITodoItem;
