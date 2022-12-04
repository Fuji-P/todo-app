import { useState  } from 'react';
import AddTodo from './AddTodo'
import TodoList from './TodoList';

// todosの初期値とTodoList.jsとAddTodo.jsファイルをimportしてpropsでtodosとsetTodosを渡す
const Todo = () => {
	const initialState = [
		{
			task: 'Learn vue.js',
			isCompleted: false
		},
		{
			task: 'Learn React Hook',
			isCompleted: false
		},
		{
			task: 'Learn Gatsby.js',
			isCompleted: false
		},
	];

	// useStateにinitialStateを指定することでtodosにはTodoリストが保存される
	const [todos, setTodos] = useState(initialState);

	return (
		<div>
			<h1>Todo List</h1>
			<AddTodo setTodos={setTodos} />
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	)
};

export default Todo;