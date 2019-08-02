import React from 'react'
import PropTypes from 'prop-types'

import {
    CloseButton,
    Strong,
    Container,
    Modal,
} from './InstructionsModal.styles'

const InstructionsModal = props => (
    <Container>
        <Modal>
            <p>
                <Strong>Spelldown</Strong> is a very simple game: you are given{' '}
                <Strong>7 letters</Strong> and must build as many words as
                possible from them. <Strong>One letter</Strong>, however, is
                special and needs to be used in all the words you submit.
            </p>
            <p>
                You can enter letters by <Strong>typing</Strong> or by{' '}
                <Strong>clicking on the letter buttons</Strong>.
            </p>
            <p>
                Words can be no shorter than <Strong>4 letters long</Strong>.
            </p>
            <CloseButton onClick={props.onClose}>Gotcha!</CloseButton>
        </Modal>
    </Container>
)

InstructionsModal.propTypes = {
    onClose: PropTypes.func.isRequired,
}

export default InstructionsModal
