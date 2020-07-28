import { Container } from '@material-ui/core';
import React from 'react';
import './App.css';
import TodoList from './apps/todo/TodoList';

const App: React.FunctionComponent = () => {
	return (
		<Container maxWidth="lg">
			<h1 className="">React Minis</h1>
			<TodoList />
		</Container>
	);
};

export default App;
