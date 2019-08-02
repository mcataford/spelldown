import styled from 'styled-components'

export const InstructionsLabel = styled.aside`
    margin-bottom: 20px;
    text-align: center;
`

export const Strong = styled.strong`
    font-size: 1.4em;
`

export const Container = styled.div`
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Raleway', sans-serif;
`

export const Modal = styled.div`
    background-color: #fff;
    width: 60%;
    max-width: 600px;
    padding: 20px;
    border-radius: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & p {
        margin: 5px 0;
    }
`

export const CloseButton = styled.span`
    padding: 10px;
    cursor: pointer;
    font-size: 1.4em;
    font-weight: bold;
    text-decoration: underline;
`
