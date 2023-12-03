import { createEffect, createEvent, createStore } from 'effector'
import { TodosService } from 'services/todos.service'
import { TodoType } from 'types/todo.type'

export const addTodo = createEvent<string>()
export const completeTodo = createEvent<number>()
export const deleteTodo = createEvent<number>()

export const fetchTodos = createEffect(TodosService.getTodos)

export const todosStore = createStore<TodoType[]>([])
	.on(fetchTodos.doneData, (_, result) => result)
	.on(addTodo, (state, payload) => [
		...state,
		{
			completed: false,
			id: Math.random(),
			title: payload,
		},
	])
	.on(completeTodo, (state, payload) =>
		state.map(todo => {
			if (todo.id === payload) {
				return {
					...todo,
					completed: !todo.completed,
				}
			}
			return todo
		})
	)
	.on(deleteTodo, (state, payload) => {
		return state.filter(todo => todo.id !== payload)
	})
