import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/_mixins.module.scss'
import { Provider } from 'react-redux'
import store from './store/redux'
import { App } from 'components/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App></App>
		</Provider>
	</React.StrictMode>
)
