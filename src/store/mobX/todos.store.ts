import { makeAutoObservable } from 'mobx'
import { TodoType } from 'types/todo.type'

export class TodosStore {
	todos: TodoType[] = []

	constructor() {
		// makeObservable(this, {
		// 	todos: observable,
		// 	addTodo: action,
		// 	completeTodo: action,
		// 	deleteTodo: action,
		// })

		makeAutoObservable(this)
	}

	addTodo = (title: string) => {
		this.todos.push({
			id: Math.random(),
			title,
			completed: false,
		})
	}

	completeTodo = (id: number) => {
		const todo = this.todos.find(todo => todo.id === id)

		if (todo) {
			todo.completed = !todo.completed
		}
	}

	deleteTodo = (id: number) => {
		this.todos = this.todos.filter(todo => todo.id !== id)
	}
}

export default new TodosStore()
