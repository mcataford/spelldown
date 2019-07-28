import styled, { css } from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Raleway', sans-serif;
`

export const ClickableGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 300px;
    margin-bottom: 20px;
`

export const ClickableBox = styled.div`
    &:nth-child(4) {
        margin: 0 100px;
    }

    transition: 0.5s;
    width: calc(100px - 4px);
    height: calc(100px - 4px);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid transparent;
    border-radius: 10px;
    font-size: 1.5em;

    ${props =>
        props.isSelected &&
        css`
            font-weight: bold;
            border: 2px solid #8ad9ff;
            background-color: #8ad9ff;
        `}

    ${props =>
        props.isRequired &&
        css`
            border: 2px solid #0072ff;
            background-color: #0072ff;
        `}
`

export const Title = styled.h1`
    text-align: center;
    font-family: 'Slabo 27px', serif;
`

export const InstructionsLabel = styled.aside`
    width: 300px;
    margin-bottom: 20px;
    text-align: center;
`

export const SubmittedAnswersBox = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 300px;
`

export const Answer = styled.span`
    width: calc(90px);
    margin: 5px;
`

export const SubmissionCounter = styled.aside`
    margin-bottom: 20px;
`

export const Strong = styled.strong`
    font-size: 1.4em;
`
