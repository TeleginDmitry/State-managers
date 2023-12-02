import React from 'react'
import { RootStore } from './root.store'

export const RootContext = React.createContext<RootStore | undefined>(undefined)

export const RootProvider = ({ children }: { children: React.ReactNode }) => {
	const store = new RootStore()

	return <RootContext.Provider value={store}>{children}</RootContext.Provider>
}
