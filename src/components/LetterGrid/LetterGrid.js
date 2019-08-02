import React from 'react'
import PropTypes from 'prop-types'

import { ClickableBox, ClickableGrid } from './LetterGrid.styles'

const LetterGrid = props => {
    const { availableLetters, requiredLetter, currentWord, onClick } = props

    const boxes = availableLetters.split('').map(letter => (
        <ClickableBox
            key={letter}
            isRequired={requiredLetter === letter}
            isSelected={currentWord.includes(letter.toUpperCase())}
            onClick={() => {
                onClick(letter)
            }}
        >
            {letter}
        </ClickableBox>
    ))

    return <ClickableGrid>{boxes}</ClickableGrid>
}

LetterGrid.propTypes = {
    availableLetters: PropTypes.string.isRequired,
    requiredLetter: PropTypes.string.isRequired,
    currentWord: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

LetterGrid.defaultProps = {
    onClick: () => {},
}

export default LetterGrid
