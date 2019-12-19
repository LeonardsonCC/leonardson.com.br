import styled from 'styled-components'
import { breakpoints } from '../../themes/variables'

export const SliderTheme = styled.div`
        display: flex;
        flex-direction: row;
        min-width: 100%;
        overflow-y: hidden;
        overflow-x: auto;
        padding: 60px 10px;

        @media(max-width: ${breakpoints.tablet}) {
            padding: 60px 0; 
            width: 90vw;
        }
    `