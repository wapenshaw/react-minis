import React from 'react';
import { Paper, TextField } from '@material-ui/core';
import useInputState from './hooks/useInputState';

interface Props {
	submit: (a: string) => void;
}

const MUIForm: React.FunctionComponent<Props> = ({ submit }) => {
	const [todo, handleChange, reset] = useInputState('');

	return (
		<Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					submit(todo);
					reset();
				}}
			>
				<TextField
					value={todo}
					fullWidth
					label="Add New Todo!"
					margin="normal"
					onChange={handleChange}
					onDoubleClick={reset}
				/>
			</form>
		</Paper>
	);
};

export default MUIForm;
