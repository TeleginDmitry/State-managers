import styles from './Actions.module.scss'
import { ChangeEvent, useState } from 'react'
import { useStores } from 'hooks/useStores'

export function Actions() {
	const {
		todos: { addTodo },
	} = useStores()

	const [description, setDescription] = useState('')

	function onChange(el: ChangeEvent<HTMLInputElement>) {
		setDescription(el.target.value)
	}
	return (
		<div className={styles.actions}>
			<input onChange={onChange} value={description} type='text' />
			<button onClick={() => addTodo(description)}>Add</button>
		</div>
	)
}
