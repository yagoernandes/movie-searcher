import { call, put, takeLatest, all } from 'redux-saga/effects'
import { ApiTypes } from './types'
import api from '../../../services/api'
import {
	searchSuccess,
	searchFailure,
	fetchTvShowSuccess,
	fetchTvShowFailure,
	fetchMovieSuccess,
	fetchMovieFailure,
	fetchPersonSuccess,
	fetchPersonFailure,
} from './actions'

export default function* watcherSaga() {
	return yield all([
		takeLatest(ApiTypes.SEARCH_REQUEST, search),
		takeLatest(ApiTypes.FETCH_TVSHOW, fetchTvShow),
	])
}

type Action = { payload: string; type: string }

export function* search({ payload }: Action) {
	try {
		const response = yield call(api.get, `search/multi?query=${payload}&page=1`)
		yield put(searchSuccess(response.data))
	} catch (error) {
		yield put(searchFailure(error))
	}
}

export function* fetchTvShow({ payload }: Action) {
	try {
		const response = yield call(api.get, `tv/${payload}`)
		yield put(fetchTvShowSuccess(response.data))
	} catch (error) {
		yield put(fetchTvShowFailure(error))
	}
}

export function* fetchMovie({ payload }: Action) {
	try {
		const response = yield call(api.get, `movie/${payload}`)
		yield put(fetchMovieSuccess(response.data))
	} catch (error) {
		yield put(fetchMovieFailure(error))
	}
}

export function* fetchPerson({ payload }: Action) {
	try {
		const response = yield call(api.get, `person/${payload}`)
		yield put(fetchPersonSuccess(response.data))
	} catch (error) {
		yield put(fetchPersonFailure(error))
	}
}
