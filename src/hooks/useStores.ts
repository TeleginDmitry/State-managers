import { useContext } from 'react'
import { RootContext } from 'store/mobX'

export const useStores = () => {
	const context = useContext(RootContext)
	if (context === undefined) {
		throw new Error('useRootStore must be used within RootStoreProvider')
	}

	return context
}
