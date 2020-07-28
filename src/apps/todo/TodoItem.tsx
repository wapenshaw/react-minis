import React, { Component } from 'react';
import { Todo } from './types';
import './TodoItem.css';

interface Props extends Todo {
	remove: (id: string) => void;
	updateTodo: (id: string, newTodo: string) => void;
	toggleComplete: (id: string) => void;
}

interface State extends Todo {
	editable: boolean;
}

class TodoItem extends Component<Props, State> {
	state: State = {
		completed: false,
		editable: false,
		id: this.props.id,
		todoText: this.props.todoText,
	};

	toggleEdit = (): void => {
		this.setState({ editable: true });
	};

	handleDelete = (): void => {
		this.props.remove(this.props.id);
	};
	handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		this.setState({ todoText: event.target.value, id: this.props.id });
	};
	saveEdit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		this.props.updateTodo(this.props.id, this.state.todoText);
		this.setState({ editable: false });
	};
	toggleComplete = (): void => {
		this.props.toggleComplete(this.props.id);
		this.setState({ completed: !this.state.completed });
	};

	render(): React.ReactNode {
		let frag;
		if (this.state.editable) {
			frag = (
				<div className="Todo">
					<form className="Todo-editform" action="" onSubmit={this.saveEdit}>
						<input
							type="text"
							name=""
							id=""
							value={this.state.todoText}
							onChange={this.handleChange}
						/>
						<button type="submit">S</button>
					</form>
				</div>
			);
		} else {
			frag = (
				<li
					onClick={this.toggleComplete}
					className={this.state.completed ? 'Todo-task completed' : 'Todo-task'}
				>
					<span>{this.state.todoText}</span> <span>{this.props.completed}</span>
					<div className="Todo-buttons">
						<button onClick={this.toggleEdit}>
							<i className="fas fa-pen"></i>
						</button>
						<button onClick={this.handleDelete}>
							<i className="fas fa-trash"></i>
						</button>
					</div>
				</li>
			);
		}
		return frag;
	}
}

export default TodoItem;
