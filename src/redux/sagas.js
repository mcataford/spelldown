import { call, takeEvery, put, select } from 'redux-saga/effects'
import axios from 'axios'

import {
    INITIALIZE_PUZZLE,
    SUBMIT_ANSWER,
    dictionaryLoadedSuccess,
    dictionaryLoadedFailure,
    submitAnswerCorrect,
    submitAnswerIncorrect,
} from './actions'

import { possibleWordsSelector } from './selectors'

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

export function* initializePuzzleSaga() {
    yield takeEvery(INITIALIZE_PUZZLE, fetchDictionary)
}

function* verifyAnswer(action) {
    const { payload } = action

    const validAnswers = yield select(possibleWordsSelector)

    if (validAnswers.includes(payload)) {
        yield put(submitAnswerCorrect(payload))
    } else {
        yield put(submitAnswerIncorrect())
    }
}

export function* verifyAnswerSaga() {
    yield takeEvery(SUBMIT_ANSWER, verifyAnswer)
}
