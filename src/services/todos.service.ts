import { TodoType } from 'types/todo.type'

export const TodosService = {
	getTodos: async () => {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/todos?_limit=5'
		)
		const todos: TodoType[] = await response.json()
		return todos
	},
}
