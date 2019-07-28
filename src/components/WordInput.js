import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { InputText } from './WordInput.styles'

const WordInput = props => {
    const [value, setValue] = useState('')

    const onChange = event => {
        setValue(event.target.value)
        props.onChange(event.target.value)
    }

    const onKeyPress = event => {
        if (event.key === 'Enter') {
            const currentValue = value

            props.onKeyPress(currentValue)
            setValue('')
        }
    }

    return (
        <InputText value={value} onChange={onChange} onKeyPress={onKeyPress} />
    )
}

WordInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    onKeyPress: PropTypes.func.isRequired,
}

export default WordInput
