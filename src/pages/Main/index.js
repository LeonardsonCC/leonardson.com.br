import React, { useState } from 'react'
import Slider from '../../components/Slider'

import GreenPigeonImage from '../../assets/green_pigeon.png'
import moon from '../../assets/moon.svg'
import sun from '../../assets/sun.svg'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../themes/global'
import { darkTheme, lightTheme } from '../../themes/themes'

import { MainTheme, Container, Header, Info, Projects, Button } from './styles'

const Main = () => {
    const projects = [
        {
            id: 1,
            title: 'Green Pigeon',
            description: 'Lorem ipsum dolor sit amet; Aenean nec ex et quam convallis dictum. Ut luctus at leo id gravida. In maximus ligula sed.',
            image: GreenPigeonImage
        },
        {
            id: 2,
            title: 'Green Pigeon',
            description: 'Lorem ipsum dolor sit amet; Aenean nec ex et quam convallis dictum. Ut luctus at leo id gravida. In maximus ligula sed.',
            image: GreenPigeonImage
        },
        {
            id: 3,
            title: 'Green Pigeon',
            description: 'Lorem ipsum dolor sit amet; Aenean nec ex et quam convallis dictum. Ut luctus at leo id gravida. In maximus ligula sed.',
            image: GreenPigeonImage
        },
        {
            id: 4,
            title: 'Green Pigeon',
            description: 'Lorem ipsum dolor sit amet; Aenean nec ex et quam convallis dictum. Ut luctus at leo id gravida. In maximus ligula sed.',
            image: GreenPigeonImage
        }
    ]

    const [theme, setTheme] = useState(true)

    return (
        <ThemeProvider theme={theme ? darkTheme : lightTheme}>
            <GlobalStyles />
            <Button onClick={() => setTheme(!theme)}>
                <img 
                    src={
                        theme ?
                            sun :
                            moon
                    }
                    />
            </Button>
            <MainTheme>
                <Container>
                    <Header>
                        <h1>Leonardson</h1>
                        <h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet nibh nisi, sit; Aenean nec ex et quam convallis dictum. Ut luctus at leo id gravida. In maximus ligula sed.
                        </h4>
                    </Header>
                    <Info>
                        <div className="Photo" />
                        <div className="Text">
                            <h2>About</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet nibh nisi, sit; Aenean nec ex et quam convallis dictum. Ut luctus at leo id gravida. In maximus ligula sed.
                                <br />
                                <br />
                                Aenean nec ex et quam convallis dictum. Ut luctus at leo id gravida. In maximus ligula sed.
                            </p>
                        </div>
                    </Info>
                    <Projects>
                        <h1 className="Title">Projects</h1>
                        <Slider items={projects} />
                    </Projects>
                </Container>
            </MainTheme>
        </ThemeProvider>
    )
}

export default Main