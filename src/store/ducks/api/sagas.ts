import { call, put, takeLatest, all } from 'redux-saga/effects'
import { ApiTypes } from './types'
import api from '../../../services/api'
import { searchSuccess, searchFailure } from './actions'
import { push } from 'connected-react-router'

export default function* watcherSaga() {
	return yield all([takeLatest(ApiTypes.SEARCH_REQUEST, search)])
}

type Action = { payload: string; type: string }

export function* search({ payload }: Action) {
	try {
		const response = yield call(api.get, `search/multi?query=${payload}&page=1`)

		yield put(searchSuccess(response.data))
		yield put(push('/result'))
	} catch (error) {
		yield put(searchFailure(error))
	}
}
