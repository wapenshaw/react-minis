import React, { Component } from 'react';
import { Todo } from './types';
import { v4 as uuid } from 'uuid';

interface Props {
	formHandler: (t: Todo) => void;
}

interface State extends Todo {}

export default class TodoForm extends Component<Props, State> {
	state: State = {
		todoText: '',
		completed: false,
		id: '',
	};

	handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		this.setState({ todoText: event.target.value, id: uuid() });
	};

	handleForm = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		this.props.formHandler(this.state);
		this.setState({ todoText: '', id: '' });
	};

	render(): React.ReactNode {
		return (
			<div className="TodoForm">
				<form onSubmit={this.handleForm} action="">
					<label htmlFor="todoitem">Add Todo: </label>
					<input
						type="text"
						name="todoitem"
						onChange={this.handleChange}
						id=""
						value={this.state.todoText}
					/>
					<button type="submit">Add</button>
				</form>
			</div>
		);
	}
}
