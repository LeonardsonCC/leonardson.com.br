import styled from 'styled-components'
import { breakpoints } from '../../themes/variables.js'

import Me from '../../assets/me.jpg'

export const MainTheme = styled.div`
        max-width: 100vw;
        min-height: 100vh;

        background: ${({ theme }) => theme.body};
        font-family: 'Fira Code', monospace;
        color: ${({ theme }) => theme.text};

        transition: all 0.25s linear;
    `
export const Container = styled.div`
        margin: auto;
        width: 70%;

        @media (max-width: ${breakpoints.tablet}) {
            width: 100%;   
        }
    `

export const Header = styled.div`
        min-height: 90vh;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;

        h1 {
            font-size: 3.5rem;
            opacity: 0;
            margin: 30px;
            animation: fade-in-slide .8s forwards;
            font-weight: 700;
            &::before {
                content: "";
                position: absolute;
                bottom: -3px; left: -5px;
                background-color: ${({ theme }) => theme.text};
                height: 3px;
                animation: underline 1s forwards 1.6s;
                @keyframes underline {
                    0% {
                        width: 0;
                    }
                    100% {
                        width: calc(100% + 10px);
                    }
                }
            }
        }
        h4 {
            width: 60%;
            font-size: 1.1rem;
            opacity: 0;
            animation: fade-in-slide .8s forwards .5s;
            font-weight: 400;

            @media (max-width: ${breakpoints.tablet}) {
                width: 80%;   
            }
        }
    `

export const Info = styled.div`
        min-height: 100vh;
        width: 75%;
        margin: auto;
        padding: 20px;
        animation: fade-in-slide 1s forwards;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        @media (max-width: ${breakpoints.tablet}) {
            flex-direction: column;   
            width: 90%;
        }

        .Photo {
            width: 350px;
            height: 390px;
            background-image: url(${Me});
            background-position: top;
            background-size: cover;
            border-radius: 20px;
            cursor: pointer;
            box-shadow: 3px 3px 10px rgba(20, 20, 20, 0.795);
            @media (max-width: ${breakpoints.tablet}) {
                align-self: center;
                width: 350px;
                max-width: 95%;
                height: 390px;   
            }
        }

        .Text {
            width: calc(100% - 400px);
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            font-size: 1.1rem;
            @media (max-width: ${breakpoints.tablet}) {
                width: 100%;
                margin-top: 60px;   
            }

            h2 {
                font-size: 2.5rem;
                margin: 10px;
                border-bottom: 3px solid ${({ theme }) => theme.text};
                @media (max-width: ${breakpoints.tablet}) {
                    margin-bottom: 20px;   
                }
            }
        }
    `

export const Projects = styled.div`
        padding: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        animation: fade-in-slide 1s forwards;

        @media (max-width: ${breakpoints.tablet}) {
            padding: 60px 0;   
        }

        .Title {
            align-self: center;
            font-size: 2.5rem;
            border-bottom: 3px solid ${({ theme }) => theme.text};
        }
    `

export const Button = styled.span`
        width: 50px;
        height: 50px;
        position: absolute;
        right: 20px; top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        img {
            width: 25px;
            height: 25px;
        }
    `

export const Divider = styled.a`
        display: flex;
        justify-content: center;
        height: 10vh;
        opacity: 0;
        animation: fade-in-slide .8s forwards 2s;
    `