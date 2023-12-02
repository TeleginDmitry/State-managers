import { useSelector, TypedUseSelectorHook } from 'react-redux'
import type { RootState } from '../store/redux/index'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
