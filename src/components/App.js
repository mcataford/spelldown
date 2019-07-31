import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
    possibleWordsSelector,
    availableLettersSelector,
    requiredLetterSelector,
    isAppLoadedSelector,
    submittedAnswersSelector,
} from '../redux/selectors'
import { initializePuzzle, submitAnswer } from '../redux/actions'
import {
    Strong,
    SubmissionCounter,
    Answer,
    SubmittedAnswersBox,
    Title,
    Container,
    InstructionsLabel,
    ClickableGrid,
    ClickableBox,
} from './App.styles'
import Word from './Word'

const instructions = (
    <InstructionsLabel>
        <Strong>Spelldown</Strong> is a very simple game: you are given{' '}
        <Strong>7 letters</Strong> and must build as many words as possible from
        them. <Strong>One letter</Strong>, however, is special and needs to be
        used in all the words you submit.
    </InstructionsLabel>
)

const shouldCaptureKeypress = event => {
    const isSpecialKey = event.ctrlKey || event.metaKey
    const keyValue = event.key.toLowerCase()

    return (
        !isSpecialKey &&
        (['enter', 'backspace'].includes(keyValue) ||
            (keyValue.length === 1 && keyValue >= 'a' && keyValue <= 'z'))
    )
}

const App = props => {
    const [currentWord, setCurrentWord] = useState('')

    const handleKeypress = event => {
        const key = event.key.toLowerCase()

        if (!shouldCaptureKeypress(event)) return

        event.preventDefault()

        if (key.length === 1 && key >= 'a' && key <= 'z') {
            setCurrentWord(currentWord + key.toUpperCase())
        } else if (key === 'enter') {
            props.submitAnswer(currentWord)
            setCurrentWord('')
        } else if (key === 'backspace') {
            setCurrentWord(currentWord.slice(0, -1))
        }
    }

    useEffect(() => {
        if (!props.isAppLoaded) props.initializePuzzle()

        window.addEventListener('keydown', handleKeypress)

        return () => {
            window.removeEventListener('keydown', handleKeypress)
        }
    })

    const boxes = props.availableLetters.split('').map(letter => (
        <ClickableBox
            key={letter}
            isRequired={props.requiredLetter === letter}
            isSelected={currentWord.includes(letter.toLowerCase())}
        >
            {letter}
        </ClickableBox>
    ))

    const submittedAnswers = props.submittedAnswers.map(word => (
        <Answer key={word}>{word}</Answer>
    ))

    const submissionCounter = (
        <SubmissionCounter>
            {`You found `}
            <Strong>{props.submittedAnswers.length}</Strong>
            {` out of `}
            <Strong>{props.possibleWords.length}</Strong>
            {` possible answers.`}
        </SubmissionCounter>
    )
    return (
        <Container>
            <Title>Spelldown</Title>
            {instructions}
            <Word
                allowedLetters={props.availableLetters}
                requiredLetter={props.requiredLetter}
                word={currentWord}
            />
            <ClickableGrid>{boxes}</ClickableGrid>
            {submissionCounter}
            <SubmittedAnswersBox>{submittedAnswers}</SubmittedAnswersBox>
        </Container>
    )
}

App.propTypes = {
    initializePuzzle: PropTypes.func.isRequired,
    submitAnswer: PropTypes.func.isRequired,
    availableLetters: PropTypes.string.isRequired,
    requiredLetter: PropTypes.string.isRequired,
    isAppLoaded: PropTypes.bool.isRequired,
    submittedAnswers: PropTypes.array.isRequired,
    possibleWords: PropTypes.array.isRequired,
}

const mapDispatchToProps = {
    initializePuzzle,
    submitAnswer,
}

const mapStateToProps = state => ({
    availableLetters: availableLettersSelector(state),
    requiredLetter: requiredLetterSelector(state),
    isAppLoaded: isAppLoadedSelector(state),
    submittedAnswers: submittedAnswersSelector(state),
    possibleWords: possibleWordsSelector(state),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)
