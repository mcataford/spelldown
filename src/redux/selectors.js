export const availableLettersSelector = state => state.get('letters', '')
export const requiredLetterSelector = state => state.get('requiredLetter', '')
export const isAppLoadedSelector = state => state.get('appLoaded', false)
export const submittedAnswersSelector = state =>
    state.get('submittedAnswers', [])
export const possibleWordsSelector = state =>
    state.get('possibleWords', new Set())
