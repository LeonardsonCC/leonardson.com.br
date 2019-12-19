import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Fira+Code&display=swap');

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    @keyframes fade-in-slide {
        0% {
            transform: translateY(-40px);
            opacity: 0;
        }
        50% {
            transform: translateY(-10px);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes bounce {
        0% {
            transform: rotate(0);
        }
        25% {
            transform: rotate(20deg);
        }
        75% {
            transform: rotate(-20deg);
        }
        100% {
            transform: rotate(0);
        }
    }
`