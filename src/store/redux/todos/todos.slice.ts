import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TodoType } from 'types/todo.type'

interface IInitialState {
	todos: TodoType[]
}

const initialState: IInitialState = {
	todos: [],
}

const TodosSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		addTodo: (state, { payload }: PayloadAction<string>) => {
			const todo: TodoType = {
				completed: false,
				id: Math.random(),
				title: payload,
			}

			state.todos.push(todo)
		},
		completeTodo: (state, action: PayloadAction<number>) => {
			const todo = state.todos.find(({ id }) => id === action.payload)

			if (todo !== undefined) {
				todo.completed = !todo.completed
			}
		},

		deleteTodo: (state, action: PayloadAction<number>) => {
			state.todos = state.todos.filter(({ id }) => id !== action.payload)
		},
	},
})

export const { addTodo, completeTodo, deleteTodo } = TodosSlice.actions

export default TodosSlice.reducer
