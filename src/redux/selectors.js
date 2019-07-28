function getValueFromState(state, key, defaultValue = null) {
    if (!state[key]) return defaultValue

    return state[key]
}

export const availableLettersSelector = state =>
    getValueFromState(state, 'letters', '')
export const requiredLetterSelector = state =>
    getValueFromState(state, 'requiredLetter', '')
export const isAppLoadedSelector = state =>
    getValueFromState(state, 'appLoaded', false)
export const submittedAnswersSelector = state =>
    getValueFromState(state, 'submittedAnswers', [])
export const possibleWordsSelector = state =>
    getValueFromState(state, 'possibleWords', new Set())
