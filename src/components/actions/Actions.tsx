import styles from './Actions.module.scss'
import { ChangeEvent, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todosState } from 'store/recoil/atoms/todos.atoms'

export function Actions() {
	const setTodos = useSetRecoilState(todosState)

	const [title, setTitle] = useState('')

	function addTodo() {
		setTodos(state => [
			...state,
			{ completed: false, title, id: Math.random() },
		])
		setTitle('')
	}

	function onChange(el: ChangeEvent<HTMLInputElement>) {
		setTitle(el.target.value)
	}
	return (
		<div className={styles.actions}>
			<input onChange={onChange} value={title} type='text' />
			<button onClick={() => addTodo()}>Add</button>
		</div>
	)
}
