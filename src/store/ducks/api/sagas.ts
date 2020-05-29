import { call, put, takeLatest, all } from 'redux-saga/effects'
import { ApiTypes, Result, MovieResult } from './types'
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
	fetchLastMovieSuccess,
	fetchLastMovieFailure,
} from './actions'

export default function* watcherSaga() {
	return yield all([
		takeLatest(ApiTypes.SEARCH_REQUEST, search),
		takeLatest(ApiTypes.FETCH_TVSHOW, fetchTvShow),
		takeLatest(ApiTypes.FETCH_MOVIE, fetchMovie),
		takeLatest(ApiTypes.FETCH_PERSON, fetchPerson),
		takeLatest(ApiTypes.FETCH_PERSON, fetchLastMovie),
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

export function* fetchLastMovie({payload}:Action){
	try{
		const creditsResponse = yield call(
			api.get,
			`person/${payload}/movie_credits`,
		)
		const credits = (creditsResponse.data.cast as [Result])
			.filter((credit: Result) => {
				return (
					(credit as MovieResult).release_date &&
					(credit as MovieResult).release_date !== ''
				)
			})
			.filter((credit: Result) => {
				const date = new Date().getTime()
				const releaseDate = new Date(
					(credit as MovieResult).release_date || '',
				).getTime()
				return date > releaseDate
			})
			.sort(compare)
		yield put(fetchLastMovieSuccess(credits[0] as MovieResult))
	}catch (error){
		yield put(fetchLastMovieFailure(error))
	}
}

function compare(a: Result, b: Result) {
	const aRelease = parseInt(
		(a as MovieResult).release_date?.substring(0, 4) || '',
	)
	const bRelease = parseInt(
		(b as MovieResult).release_date?.substring(0, 4) || '',
	)
	if (aRelease > bRelease) {
		return -1
	} else if (aRelease < bRelease) {
		return 1
	}
	return 0
}
