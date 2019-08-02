import React from 'react'
import PropTypes from 'prop-types'

import { Container, Strong } from './SubmissionCounter.styles.js'

const SubmissionCounter = props => (
    <Container>
        {`You found `}
        <Strong>{props.correctAnswers}</Strong>
        {` out of `}
        <Strong>{props.totalAnswers}</Strong>
        {` possible answers.`}
    </Container>
)

SubmissionCounter.propTypes = {
    correctAnswers: PropTypes.number,
    totalAnswers: PropTypes.number,
}

SubmissionCounter.defaultProps = {
    correctAnswers: 0,
    totalAnswers: 0,
}

export default SubmissionCounter
