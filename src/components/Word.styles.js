import styled, { css } from 'styled-components'

import { Colors } from '../constants'

export const Container = styled.div`
    width: 100%;
    font-size: 3em;
    max-width: 300px;
    margin-bottom: 10px;
    height: 50px;
    border-bottom: 2px solid #c1c1c1;
`

export const Letter = styled.span`
    ${props =>
        props.isRequired &&
        css`
            color: ${Colors.REQUIRED_LETTER};
        `}

    ${props =>
        props.isAllowed &&
        !props.isRequired &&
        css`
            color: ${Colors.SELECTED_LETTER};
        `}
`
