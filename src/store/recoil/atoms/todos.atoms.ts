import { atom } from 'recoil'
import { TodoType } from 'types/todo.type'

export const todosState = atom<TodoType[]>({
	key: 'todos',
	default: [],
})
