import { select, put, takeEvery } from 'redux-saga/effects'

import { submitAnswerCorrect, submitAnswerIncorrect, SUBMIT_ANSWER } from './actions'
import { possibleWordsSelector, submittedAnswersSelector } from './selectors'
import { incorrectSubmissionReasons } from '../constants'

function getIncorrectSubmissionReason(validityChecks) {
    const { isValid, hasAlreadyBeenSubmitted } = validityChecks

    if (!isValid) {
        return incorrectSubmissionReasons.NOT_A_WORD
    } else if (hasAlreadyBeenSubmitted) {
        return incorrectSubmissionReasons.ALREADY_SUBMITTED
    } else {
        return incorrectSubmissionReasons.ERROR
    }
}

function* verifyAnswer(action) {
    const { payload } = action

    const validAnswers = yield select(possibleWordsSelector)
    const submittedAnswers = yield select(submittedAnswersSelector)

    const isValid = validAnswers.includes(payload)
    const hasAlreadyBeenSubmitted = submittedAnswers.includes(payload)

    if (isValid && !hasAlreadyBeenSubmitted) {
        yield put(submitAnswerCorrect(payload))
    } else {
        const reason = getIncorrectSubmissionReason({
            isValid,
            hasAlreadyBeenSubmitted,
        })
        yield put(submitAnswerIncorrect(reason))
    }
}

function* verifyAnswerSaga() {
    yield takeEvery(SUBMIT_ANSWER, verifyAnswer)
}

export default verifyAnswerSaga
