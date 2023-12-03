import { observer } from 'mobx-react-lite'
import styles from './TodoList.module.scss'
import { TodoItem } from './todoItem/TodoItem'
import { todosState } from 'store/recoil/atoms/todos.atoms'
import { useRecoilState } from 'recoil'
import { TodosService } from 'services/todos.service'
import { useEffect } from 'react'

export const TodoList = observer(() => {
	const [todos, setTodos] = useRecoilState(todosState)

	useEffect(() => {
		async function getTodos() {
			const todos = await TodosService.getTodos()

			setTodos(todos)
		}

		getTodos()
	}, [])

	return (
		<div className={styles.todos}>
			{todos.map(todo => {
				return <TodoItem key={todo.id} {...todo} />
			})}
		</div>
	)
})
