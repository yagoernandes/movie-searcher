import { Reducer } from 'redux'
import { ApiState, ApiTypes } from './types'

const INITIAL_STATE: ApiState = {
	result: null,
	error: false,
	loading: true,
}

const reducer: Reducer<ApiState> = (state = INITIAL_STATE, action) => {
	const { type, payload } = action
	switch (type) {
		case ApiTypes.SEARCH_REQUEST:
			return { ...state, loading: true }
		case ApiTypes.SEARCH_SUCCESS:
			return {
				...state,
				loading: false,
				error: false,
				result: payload,
			}
		case ApiTypes.SEARCH_FAILURE:
			return {
				...state,
				loading: false,
				error: payload,
				result: null,
			}
		default:
			return state
	}
}

export default reducer
