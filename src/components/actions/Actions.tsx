import { addTodo } from 'store/effector/todos.store'
import styles from './Actions.module.scss'
import { ChangeEvent, useState } from 'react'

export function Actions() {
	const [title, setTitle] = useState('')

	function onChange(el: ChangeEvent<HTMLInputElement>) {
		setTitle(el.target.value)
	}
	return (
		<div className={styles.actions}>
			<input onChange={onChange} value={title} type='text' />
			<button onClick={() => addTodo(title)}>Add</button>
		</div>
	)
}
