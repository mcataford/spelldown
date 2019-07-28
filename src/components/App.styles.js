import styled, { css } from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Raleway', sans-serif;
    width: 300px;
    margin: 0 auto;

    @media (max-width: 768px) {
        width: 80%;
    }
`

export const ClickableGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows:1fr 1fr 1fr;
    grid-gap: 5px;
    flex-wrap: wrap;
    margin-bottom: 20px;
    width: 100%;
`

export const ClickableBox = styled.div`
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-size: 1.5em;
    height: 100px;

    &:nth-child(4) {
        grid-column: span 3;
    }

    ${props =>
        props.isSelected &&
        css`
            font-weight: bold;
            background-color: #8ad9ff;
        `}

    ${props =>
        props.isRequired &&
        css`
            background-color: #0072ff;
        `}
`

export const Title = styled.h1`
    text-align: center;
    font-family: 'Slabo 27px', serif;
`

export const InstructionsLabel = styled.aside`
    margin-bottom: 20px;
    text-align: center;
`

export const SubmittedAnswersBox = styled.section`
    display: flex;
    flex-wrap: wrap;
`

export const Answer = styled.span`
    flex: 1 0 calc(100% / 3 - 10px);
    margin: 5px;
`

export const SubmissionCounter = styled.aside`
    margin-bottom: 20px;
`

export const Strong = styled.strong`
    font-size: 1.4em;
`
