import styled, { css } from 'styled-components'

import { Colors } from '../../constants'

export const ClickableGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 5px;
    flex-wrap: wrap;
    margin-bottom: 20px;
    width: 100%;
`

const selected = css`
    font-weight: bold;
    background-color: ${Colors.SELECTED_LETTER};
`

export const ClickableBox = styled.div`
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-size: 1.5em;
    height: 100px;
    cursor: pointer;

    &:nth-child(4) {
        grid-column: span 3;
    }

    &:hover {
        ${selected}
    }

    ${props => props.isSelected && selected}

    ${props =>
        props.isRequired &&
        css`
            background-color: ${Colors.REQUIRED_LETTER};
        `}
`
