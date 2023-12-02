import { Actions } from './actions/Actions'
import { TodoList } from './todoList/TodoList'
import styles from './App.module.scss'
import { RootProvider } from 'store/mobX'

export function App() {
	return (
		<RootProvider>
			<div className={styles.wrapper}>
				<Actions />
				<TodoList />
			</div>
		</RootProvider>
	)
}
