import { TodoType } from 'types/todo.type'
import styles from './TodoItem.module.scss'
import { useStores } from 'hooks/useStores'

export function TodoItem({ completed, description, id }: TodoType) {
	const {
		todos: { deleteTodo, completeTodo },
	} = useStores()

	return (
		<div className={styles.todo}>
			<input
				onChange={() => completeTodo(id)}
				type='checkbox'
				checked={completed}
			/>
			<p>{description}</p>
			<button onClick={() => deleteTodo(id)}>Delete</button>
		</div>
	)
}
