import { RootState } from 'store/redux'

export const TodosSelector = (state: RootState) => state.todos.todos
