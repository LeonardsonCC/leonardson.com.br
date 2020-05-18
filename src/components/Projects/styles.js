import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 20px 0;
    display: grid;
    grid-gap: 50px 50px;
    grid-auto-columns: 30%;
    grid-template-areas: "a a a"
`

export const Project = styled.a`
    color: ${({ theme }) => theme.text};
    padding: 10px 20px;
    border: 1px solid ${({theme}) => theme.text};
    display: flex;
    flex-direction: column;
    text-decoration: none;

    h4 {
        text-transform: capitalize;
        margin-bottom: 5px;
    }
    span {
        text-decoration: none;
    }
`