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
import WordInput from './WordInput'

const instructions = (
    <InstructionsLabel>
        <Strong>Spelldown</Strong> is a very simple game: you are given{' '}
        <Strong>7 letters</Strong> and must build as many words as possible from
        them. <Strong>One letter</Strong>, however, is special and needs to be
        used in all the words you submit.
    </InstructionsLabel>
)

const App = props => {
    const [selected, setSelected] = useState(new Set())

    useEffect(() => {
        if (!props.isAppLoaded) props.initializePuzzle()
    })

    const boxes = props.availableLetters.split('').map(letter => (
        <ClickableBox
            key={letter}
            isRequired={props.requiredLetter === letter}
            isSelected={selected.has(letter.toLowerCase())}
        >
            {letter}
        </ClickableBox>
    ))

    const onInputChange = value => {
        setSelected(new Set(value.toLowerCase()))
    }

    const onKeyPress = value => {
        if (props.possibleWords.includes(value.toUpperCase())) {
            setSelected(new Set())
            props.submitAnswer(value)
        }
    }

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
            <WordInput onChange={onInputChange} onKeyPress={onKeyPress} />
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
