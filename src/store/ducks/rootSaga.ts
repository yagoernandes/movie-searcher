import { all } from 'redux-saga/effects'

import RepositoriesSagas from './repositories/sagas'
import ApiSagas from './api/sagas'

export default function* rootSaga() {
	return yield all([
		RepositoriesSagas(),
		ApiSagas(),
	])
}
