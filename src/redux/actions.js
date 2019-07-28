export const INITIALIZE_PUZZLE = 'initializePuzzle'
export const DICTIONARY_LOADED_SUCCESS = 'dictionaryLoadedSuccess'
export const DICTIONARY_LOADED_FAILURE = 'dictionaryLoadedFailure'
export const SUBMIT_ANSWER = 'submitAnswer'

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
