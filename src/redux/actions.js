export const INITIALIZE_PUZZLE = 'initializePuzzle'
export const DICTIONARY_LOADED_SUCCESS = 'dictionaryLoadedSuccess'
export const DICTIONARY_LOADED_FAILURE = 'dictionaryLoadedFailure'
export const SUBMIT_ANSWER = 'submitAnswer'
export const SUBMIT_ANSWER_CORRECT = 'submitAnswerCorrect'
export const SUBMIT_ANSWER_INCORRECT = 'submitAnswerIncorrect'

export const initializePuzzle = () => ({
    type: INITIALIZE_PUZZLE,
})

export const dictionaryLoadedSuccess = payload => ({
    type: DICTIONARY_LOADED_SUCCESS,
    payload,
})

export const dictionaryLoadedFailure = payload => ({
    type: DICTIONARY_LOADED_FAILURE,
    payload,
})

export const submitAnswer = payload => ({
    type: SUBMIT_ANSWER,
    payload,
})

export const submitAnswerCorrect = payload => ({
    type: SUBMIT_ANSWER_CORRECT,
    payload,
})

export const submitAnswerIncorrect = payload => ({
    type: SUBMIT_ANSWER_INCORRECT,
    payload,
})
