import React from "react";

// propsのtodosを受け取りtodosを展開して表示し、更新、削除の関数を設定
const TodoList = ({ todos, setTodos }) => {

	// 削除するタスクを識別するためにindexを渡す
	const handleRemoveTask = index => {
		// 現在のTodoリストをspread operatorを利用して新しい配列newTodosに保存
		const newTodos = [...todos];
		// filter関数では削除を行うのではなくindexを持ったtodoを取り除く
		// const newTodos = [...todos].filter((todo, todoIndex) => todoIndex !== index);
		// spliceメソッドを利用して配列のindex番目の要素を1つ削除
		newTodos.splice(index, 1);
		// 削除後はsetTodosで新しいTodoリストで既存のTodoリストを書き換え
		setTodos(newTodos);
	}
	const handleUpdateTask = index => {
		const newTodos = todos.map((todo, todoIndex) => {
			// handleUpdateTaskの引数で設定したindexとtodos配列のindexが一致した場合
			if(todoIndex === index) {
				// todoのisCompletedの値を現在設定されている値を逆の値に設定
				todo.isCompleted = !todo.isCompleted;
			}
			return todo;
		});
		setTodos(newTodos);
	}

	return (
		<ul>
			{/* ToDoリストを画面上に表示するためにTodoリストが保存されているtodosをmap関数で展開 */}
			{/* Xをクリックするとタスクが削除されるようにspanタグにonClickイベントを追加 */}
			{/* 削除ではなくタスクの完了か未完了かを表すisCompletedの値を更新 */}
			{/* isCompletedがtrueの場合はタスクが完了したのでタスクが完了したことを表すためstyleのtextDecorationLineをline-throughに文字列の上に横棒を設定 */}
			{ todos.map((todo, index) => (
				<li
					key={ index }
					style= {{
						textDecorationLine: todo.isCompleted ? 'line-through' : 'none',
					}}
				>
					<input
						type="checkbox"
						checked={todo.isCompleted}
						onChange={() => handleUpdateTask(index)}
					/>
					{ todo.task }
					<span
						onClick={ () => handleRemoveTask(index) }
						style={{ cursor: 'pointer' }}
					>
						☓
					</span>
				</li>
			))}
		</ul>
	)
}

export default TodoList;