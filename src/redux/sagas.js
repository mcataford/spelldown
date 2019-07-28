import { call, takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'

import {
    INITIALIZE_PUZZLE,
    dictionaryLoadedSuccess,
    dictionaryLoadedFailure,
} from './actions'

const dictUrl =
    'https://raw.githubusercontent.com/mcataford/spelling/master/test.txt'

function* fetchDictionary() {
    try {
        const dictionaryData = yield call(axios.get, dictUrl)
        yield put(dictionaryLoadedSuccess(dictionaryData.data))
    } catch (e) {
        yield put(dictionaryLoadedFailure(e.message))
    }
}

function* initializePuzzleSaga() {
    yield takeEvery(INITIALIZE_PUZZLE, fetchDictionary)
}

export default initializePuzzleSaga
