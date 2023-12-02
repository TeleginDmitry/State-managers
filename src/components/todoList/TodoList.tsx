import { observer } from 'mobx-react-lite'
import styles from './TodoList.module.scss'
import { TodoItem } from './todoItem/TodoItem'
import { useStores } from 'hooks/useStores'

export const TodoList = observer(() => {
	const {
		todos: { todos },
	} = useStores()

	return (
		<div className={styles.todos}>
			{todos.map(todo => {
				return <TodoItem key={todo.id} {...todo} />
			})}
		</div>
	)
})
