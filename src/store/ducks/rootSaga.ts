import { all } from 'redux-saga/effects'

import ApiSagas from './api/sagas'

export default function* rootSaga() {
	return yield all([
		ApiSagas(),
	])
}
