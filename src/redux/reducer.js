import {
    SUBMIT_ANSWER,
    INITIALIZE_PUZZLE,
    DICTIONARY_LOADED_SUCCESS,
    DICTIONARY_LOADED_FAILURE,
} from './actions'

const defaultState = {
    appLoaded: false,
    hasErrored: false,
    letters: '',
    requiredLetter: '',
    possibleWords: [],
    submittedAnswers: [],
}

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
            return {
                ...state,
                ...preparePuzzle(payload),
                appLoaded: true,
            }
        case DICTIONARY_LOADED_FAILURE:
            return {
                ...state,
                hasErrored: true,
            }
        case SUBMIT_ANSWER: {
            const previousSubmissions = state.submittedAnswers
                ? state.submittedAnswers
                : []
            previousSubmissions.push(payload)
            return {
                ...state,
                submittedAnswers: previousSubmissions,
            }
        }
        default:
            return state
    }
}
