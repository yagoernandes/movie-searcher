import { Reducer } from 'redux'
import { ApiState, ApiTypes } from './types'

const INITIAL_STATE: ApiState = {
	results: null,
	error: false,
	loading: true,
}

const reducer: Reducer<ApiState> = (state = INITIAL_STATE, action) => {
	const { type, payload } = action
	switch (type) {
		case ApiTypes.SEARCH_REQUEST:
			return { ...state, loading: true, result: null }
		case ApiTypes.SEARCH_SUCCESS:
			return {
				...state,
				loading: false,
				error: false,
				results: payload,
			}
		case ApiTypes.SEARCH_FAILURE:
			return {
				...state,
				loading: false,
				error: payload,
				results: null,
			}
		///////////////////////////////
		case ApiTypes.FETCH_MOVIE:
			return { ...state, loading: true, movieDetails: null }
		case ApiTypes.FETCH_MOVIE_SUCCESS:
			return {
				...state,
				loading: false,
				error: false,
				movieDetails: payload,
			}
		case ApiTypes.FETCH_MOVIE_FAILURE:
			return {
				...state,
				loading: false,
				error: payload,
				movieDetails: null,
			}
		////////////////////////////////
		case ApiTypes.FETCH_LAST_MOVIE:
			return { ...state, loading: true, lastMovie: null }
		case ApiTypes.FETCH_LAST_MOVIE_SUCCESS:
			return {
				...state,
				loading: false,
				error: false,
				lastMovie: payload,
			}
		case ApiTypes.FETCH_LAST_MOVIE_FAILURE:
			return {
				...state,
				loading: false,
				error: payload,
				lastMovie: null,
			}
		///////////////////////////////
		case ApiTypes.FETCH_PERSON:
			return { ...state, loading: true, personDetails: null }
		case ApiTypes.FETCH_PERSON_SUCCESS:
			return {
				...state,
				loading: false,
				error: false,
				personDetails: payload,
			}
		case ApiTypes.FETCH_PERSON_FAILURE:
			return {
				...state,
				loading: false,
				error: payload,
				personDetails: null,
			}
		///////////////////////////////
		case ApiTypes.FETCH_TVSHOW:
			return { ...state, loading: true, tvShowDetails: null }
		case ApiTypes.FETCH_TVSHOW_SUCCESS:
			return {
				...state,
				loading: false,
				error: false,
				tvShowDetails: payload,
			}
		case ApiTypes.FETCH_TVSHOW_FAILURE:
			return {
				...state,
				loading: false,
				error: payload,
				tvShowDetails: null,
			}
		default:
			return state
	}
}

export default reducer
