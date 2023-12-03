import { observer } from 'mobx-react-lite'
import styles from './TodoList.module.scss'
import { TodoItem } from './todoItem/TodoItem'
import { useUnit } from 'effector-react'
import { fetchTodos, todosStore } from 'store/effector/todos.store'
import { useEffect } from 'react'

export const TodoList = observer(() => {
	const todos = useUnit(todosStore)

	useEffect(() => {
		fetchTodos()
	}, [])

	return (
		<div className={styles.todos}>
			{todos.map(todo => {
				return <TodoItem key={todo.id} {...todo} />
			})}
		</div>
	)
})
