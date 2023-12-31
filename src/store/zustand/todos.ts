import { ZustandTodos } from 'types/zustandTodos.type'
import { create } from 'zustand'

export const todosStore = create<ZustandTodos>(set => ({
	todos: [],
	addTodo: title =>
		set(state => ({
			todos: [...state.todos, { id: Date.now(), title, completed: false }],
		})),
	completeTodo(id) {
		set(state => ({
			todos: state.todos.map(todo => {
				if (todo.id === id) {
					return { ...todo, completed: !todo.completed }
				}
				return todo
			}),
		}))
	},
	deleteTodo(id) {
		set(state => ({ todos: state.todos.filter(todo => todo.id !== id) }))
	},
}))
