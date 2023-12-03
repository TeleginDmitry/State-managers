import { TodoType } from 'types/todo.type'
import styles from './TodoItem.module.scss'
import { useRecoilState } from 'recoil'
import { todosState } from 'store/recoil/atoms/todos.atoms'

export function TodoItem({ completed, title, id }: TodoType) {
	const [, setTodos] = useRecoilState(todosState)

	function completeTodo() {
		setTodos(state =>
			state.map(todo => {
				if (todo.id === id) {
					return { ...todo, completed: !todo.completed }
				}
				return todo
			})
		)
	}

	function deleteTodo() {
		setTodos(state => state.filter(todo => todo.id !== id))
	}

	return (
		<div className={styles.todo}>
			<input
				onChange={() => completeTodo()}
				type='checkbox'
				checked={completed}
			/>
			<p>{title}</p>
			<button onClick={() => deleteTodo()}>Delete</button>
		</div>
	)
}
