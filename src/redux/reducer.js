import Immutable from 'immutable'

import {
    SUBMIT_ANSWER,
    INITIALIZE_PUZZLE,
    DICTIONARY_LOADED_SUCCESS,
    DICTIONARY_LOADED_FAILURE,
    SUBMIT_ANSWER_CORRECT,
    SUBMIT_ANSWER_INCORRECT,
} from './actions'

const defaultState = Immutable.fromJS({
    appLoaded: false,
    hasErrored: false,
    isVerifyingAnswer: false,
    letters: '',
    requiredLetter: '',
    possibleWords: [],
    submittedAnswers: [],
})

function preparePuzzle(puzzles) {
    const puzzleKeys = Object.keys(puzzles)
    const randomlyChosenKey =
        puzzleKeys[Math.floor(Math.random() * puzzleKeys.length)]
    const chosenPossibleWords = puzzles[randomlyChosenKey]
    const chosenRequiredLetter =
        randomlyChosenKey[Math.floor(Math.random() * randomlyChosenKey.length)]
    return {
        letters: randomlyChosenKey,
        requiredLetter: chosenRequiredLetter,
        possibleWords: chosenPossibleWords.filter(word =>
            word.includes(chosenRequiredLetter),
        ),
    }
}

export default (state = defaultState, action) => {
    const { type, payload } = action

    switch (type) {
        case INITIALIZE_PUZZLE:
            return state
        case DICTIONARY_LOADED_SUCCESS:
            return state.merge({
                ...preparePuzzle(payload),
                appLoaded: true,
            })
        case DICTIONARY_LOADED_FAILURE:
            return state.merge({
                hasErrored: true,
            })
        case SUBMIT_ANSWER:
            return state.merge({
                isVerifyingAnswer: true,
            })
        case SUBMIT_ANSWER_CORRECT:
            return state.merge({
                isVerifyingAnswer: false,
                submittedAnswers: state
                    .get('submittedAnswers', [])
                    .concat(payload),
            })
        case SUBMIT_ANSWER_INCORRECT:
            return state.merge({
                isVerifyingAnswer: false,
            })
        default:
            return state
    }
}
