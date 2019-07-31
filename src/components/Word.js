import React from 'react'
import PropTypes from 'prop-types'

import { Container, Letter } from './Word.styles'

const Word = props => {
    const { word, allowedLetters, requiredLetter } = props

    const formattedLetters = [...word].map((letter, index) => (
        <Letter
            key={`${letter}-${index}-${word}`}
            isAllowed={allowedLetters.includes(letter)}
            isRequired={letter === requiredLetter}
        >
            {letter}
        </Letter>
    ))

    return <Container>{formattedLetters}</Container>
}

Word.propTypes = {
    word: PropTypes.string,
    allowedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
    requiredLetter: PropTypes.string.isRequired,
}

Word.defaultProps = {
    word: '',
}

export default Word
