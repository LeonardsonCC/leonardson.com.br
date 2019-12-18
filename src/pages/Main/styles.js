import styled from 'styled-components'
import { breakpoints } from '../../themes/variables.js'

import Me from '../../assets/me.jpg'

export const MainTheme = styled.div`
        max-width: 100vw;
        min-height: 100vh;

        background: ${({ theme }) => theme.body};
        font-family: 'Courier Prime', monospace;
        color: ${({ theme }) => theme.text};

        transition: all 0.25s linear;
    `
export const Container = styled.div`
        margin: auto;
        width: 70%;

        @media (max-width: ${breakpoints.mobileM}) {
            width: 100%;   
        }
    `

export const Header = styled.div`
        min-height: 80vh;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;

        h1 {
            font-size: 3.5rem;
            margin: 30px;
            border-bottom: ${({ theme }) => theme.text} 3px solid;
            &.SmallName {
                display: none;
            }
            @media (max-width: ${breakpoints.mobileM}) {
                &.BigName {
                    display: none;
                }
                &.SmallName {
                    display: block
                }
            }
        }
        h4 {
            width: 60%;
            font-size: 1.1rem;

            @media (max-width: ${breakpoints.mobileM}) {
                width: 80%;   
            }
        }
    `

export const Info = styled.div`
        width: 75%;
        margin: auto;
        padding: 20px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        @media (max-width: ${breakpoints.mobileM}) {
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
            @media (max-width: ${breakpoints.mobileM}) {
                align-self: center;
                width: 100%;
                height: 300px;   
            }
        }

        .Text {
            width: calc(100% - 400px);
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            font-size: 1.1rem;
            @media (max-width: ${breakpoints.mobileM}) {
                width: 100%;
                margin-top: 60px;   
            }

            h2 {
                font-size: 2.5rem;
                margin: 10px;
                border-bottom: 3px solid ${({ theme }) => theme.text};
                @media (max-width: ${breakpoints.mobileM}) {
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

        @media (max-width: ${breakpoints.mobileM}) {
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

        img {
            width: 25px;
            height: 25px;
        }
    `