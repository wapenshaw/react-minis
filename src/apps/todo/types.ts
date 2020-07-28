export interface Todo {
	id: string;
	todoText: string;
	completed: boolean;
}

export interface List {
	todoList: Todo[];
}
