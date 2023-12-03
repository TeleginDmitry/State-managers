import { TodoType } from 'types/todo.type'
import styles from './TodoItem.module.scss'
import { completeTodo, deleteTodo } from 'store/effector/todos.store'

export function TodoItem({ completed, title, id }: TodoType) {
	return (
		<div className={styles.todo}>
			<input
				onChange={() => completeTodo(id)}
				type='checkbox'
				checked={completed}
			/>
			<p>{title}</p>
			<button onClick={() => deleteTodo(id)}>Delete</button>
		</div>
	)
}
