import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
    possibleWordsSelector,
    availableLettersSelector,
    requiredLetterSelector,
    isAppLoadedSelector,
    submittedAnswersSelector,
    isInstructionsModalVisibleSelector,
} from '../redux/selectors'
import {
    initializePuzzle,
    submitAnswer,
    showInstructionsModal,
    hideInstructionsModal,
} from '../redux/actions'
import {
    Strong,
    Answer,
    SubmittedAnswersBox,
    Title,
    Container,
    InstructionsLabel,
    RulesButton,
} from './App.styles'

import Word from './Word'
import LetterGrid from './LetterGrid'
import SubmissionCounter from './SubmissionCounter'
import InstructionsModal from './InstructionsModal'

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

    const handleBoxClick = letter => {
        setCurrentWord(currentWord + letter.toUpperCase())
    }

    useEffect(() => {
        if (!props.isAppLoaded) props.initializePuzzle()

        window.addEventListener('keydown', handleKeypress)

        return () => {
            window.removeEventListener('keydown', handleKeypress)
        }
    })

    const submittedAnswers = props.submittedAnswers.map(word => (
        <Answer key={word}>{word}</Answer>
    ))

    const instructions = (
        <InstructionsLabel>
            <p>
                <Strong>Spelldown</Strong> is a very simple game: you are given{' '}
                <Strong>7 letters</Strong> and must build as many words as
                possible from them. <Strong>One letter</Strong>, however, is
                special and needs to be used in all the words you submit.
            </p>
            <p>
                <RulesButton onClick={props.showInstructionsModal}>
                    How do I play?
                </RulesButton>
            </p>
        </InstructionsLabel>
    )
    const instructionsModal = props.isInstructionsModalVisible ? (
        <InstructionsModal onClose={props.hideInstructionsModal} />
    ) : null

    return (
        <React.Fragment>
            <Container>
                <Title>Spelldown</Title>
                {instructions}
                <Word
                    allowedLetters={props.availableLetters}
                    requiredLetter={props.requiredLetter}
                    word={currentWord}
                />
                <LetterGrid
                    availableLetters={props.availableLetters}
                    requiredLetter={props.requiredLetter}
                    currentWord={currentWord}
                    onClick={handleBoxClick}
                />
                <SubmissionCounter
                    correctAnswers={props.submittedAnswers.length}
                    totalAnswers={props.possibleWords.length}
                />
                <SubmittedAnswersBox>{submittedAnswers}</SubmittedAnswersBox>
            </Container>
            {instructionsModal}
        </React.Fragment>
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
    isInstructionsModalVisible: PropTypes.bool.isRequired,
    showInstructionsModal: PropTypes.func.isRequired,
    hideInstructionsModal: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
    initializePuzzle,
    submitAnswer,
    showInstructionsModal,
    hideInstructionsModal,
}

const mapStateToProps = state => ({
    availableLetters: availableLettersSelector(state),
    requiredLetter: requiredLetterSelector(state),
    isAppLoaded: isAppLoadedSelector(state),
    submittedAnswers: submittedAnswersSelector(state),
    possibleWords: possibleWordsSelector(state),
    isInstructionsModalVisible: isInstructionsModalVisibleSelector(state),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)
