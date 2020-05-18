import styled from 'styled-components';
import {breakpoints} from '../../themes/variables'

export const Wrapper = styled.div`
    padding: 20px 0;
    display: grid;
    grid-gap: 50px 50px;
    grid-auto-columns: 30%;
    grid-template-areas: "a a a";
    
    @media (max-width: ${breakpoints.tablet}) {
        margin: auto;
        width: 90%;  
        grid-auto-columns: 100%;
        grid-template-areas: "a"; 
    }
`

export const Title = styled.h3`
    animation: fade-in-slide 1s forwards;
    text-align: center;
    font-size: 2.5rem;
    margin: 10px;
    border-bottom: 3px solid ${({ theme }) => theme.text};
    @media (max-width: ${breakpoints.tablet}) {
        margin-bottom: 20px;   
    }
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