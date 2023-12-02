import { TodoType } from './todo.type'

export interface ZustandTodos {
	todos: TodoType[]
	addTodo: (description: string) => void
	completeTodo: (id: number) => void
	deleteTodo: (id: number) => void
}
