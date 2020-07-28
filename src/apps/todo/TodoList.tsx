import React, { Component, ReactFragment } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import { Todo } from './types';
import './TodoList.css';

interface Props {}
interface State {
	list: Todo[];
}

export default class TodoList extends Component<Props, State> {
	state: State = {
		list: [],
	};

	removeTodo = (id: string): void => {
		this.setState((st) => ({
			list: st.list.filter((td) => td.id !== id),
		}));
	};

	addTodo = (todo: Todo): void => {
		this.setState((st) => ({ list: [...st.list, todo] }));
	};

	updateTodo = (id: string, newTodo: string): void => {
		const updatedTodos = this.state.list.map((todo) => {
			if (todo.id === id) {
				return { ...todo, todoText: newTodo };
			}
			return todo;
		});
		this.setState({ list: updatedTodos });
	};
	toggleTodo = (id: string): void => {
		const updatedTodos = this.state.list.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		this.setState({ list: updatedTodos });
	};

	renderTodos = (): ReactFragment => {
		if (this.state.list.length > 0) {
			return this.state.list.map((td) => {
				return (
					<TodoItem
						toggleComplete={this.toggleTodo}
						key={td.id}
						id={td.id}
						todoText={td.todoText}
						completed={td.completed}
						updateTodo={this.updateTodo}
						remove={this.removeTodo}
					/>
				);
			});
		} else return <div>No Todos Yet!</div>;
	};

	render(): React.ReactNode {
		return (
			<div className="Todolist">
				<h1>
					React Todo List <span>in Typescript React!</span>{' '}
				</h1>
				<ul>{this.renderTodos()}</ul>
				<TodoForm formHandler={this.addTodo} />
			</div>
		);
	}
}
