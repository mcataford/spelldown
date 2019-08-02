import React from 'react'
import PropTypes from 'prop-types'

import { Container, Button } from './ButtonBar.styles'

const ButtonBar = props => {
    const { onResetClick, onSubmitClick } = props

    return (
        <Container>
            <Button onClick={onResetClick}>Reset</Button>
            <Button onClick={onSubmitClick}>Submit</Button>
        </Container>
    )
}

ButtonBar.propTypes = {
    onResetClick: PropTypes.func.isRequired,
    onSubmitClick: PropTypes.func.isRequired,
}

export default ButtonBar
