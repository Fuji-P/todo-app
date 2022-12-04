import { useState } from "react";

// タスクの追加の処理
const AddTodo = ({ setTodos }) => {
	// 入力した情報を保持するための新しい変数taskをuseStateで追加
	const [task, setTask] = useState('');
	// イベント時に実行されるhandleNewTask関数を追加
	// inputで入力した値はevent.target.valueで取得することができる
	const handleNewTask = (event) => {
		console.log(event.target.value);
		setTask(event.target.value);
	}
	// input要素に入力した文字列をtodosに追加するためにhandleSubmit関数を追加
	const handleSubmit = (event) => {
		event.preventDefault();
		if (task === '') return;
		// 文字列が入っている場合は、setTodosによりtodosリストに新しいタスクを追加
		setTodos(todos => [...todos, { task, isCompleted: false }]);
		// setTaskでは入力欄に入力した文字はTodoリストに追加されるのでその文字を入力欄から削除
		setTask('');
	}

	return (
		<form onSubmit={handleSubmit}>
			{/* 入力したタスクをtodoリストに保存するためにFormタグを追加 */}
			{/* 新しいタスクを追加するためのinputタグをリストの上に追加 */}
			{/* inputタグに入力した値を取得するためにonChangeイベントを設定し、value属性の値に追加したtaskを指定 */}
			Add Task :
			<input value={ task } placeholder="Add New Task" onChange={handleNewTask}/>
		</form>
	);
};

export default AddTodo;