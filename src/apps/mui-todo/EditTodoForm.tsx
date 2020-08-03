import { TextField } from '@material-ui/core';
import React from 'react';
import useInputState from './hooks/useInputState';

interface Props {
	editTodo: (a: string, txt: string) => void;
	id: string;
	todoText: string;
	toggleEdit: () => void;
}

const EditTodoForm: React.FunctionComponent<Props> = ({
	editTodo,
	id,
	todoText,
	toggleEdit,
}) => {
	const [text, handleChange, reset] = useInputState(todoText);
	return (
		<form
			style={{
				marginLeft: '1rem',
				width: '100%',
			}}
			onSubmit={(e) => {
				e.preventDefault();
				editTodo(id, text);
				reset();
				toggleEdit();
			}}
		>
			<TextField
				margin="normal"
				value={text}
				onChange={handleChange}
				fullWidth
				autoFocus
			/>
		</form>
	);
};

export default EditTodoForm;
