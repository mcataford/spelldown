import styled from 'styled-components'

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

export const Strong = styled.strong`
    font-size: 1.4em;
`
