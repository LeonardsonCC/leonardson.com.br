import React, { useState } from 'react'
import Slider from '../../components/Slider'

import GreenPigeonImage from '../../assets/green_pigeon.png'
import moon from '../../assets/moon.svg'
import sun from '../../assets/sun.svg'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../themes/global'
import { darkTheme, lightTheme } from '../../themes/themes'

import { MainTheme, Container, Header, Info, Projects, Button, Divider } from './styles'
import IconDownArrow from '../../components/IconDownArrow'

const Main = () => {
    const projects = [
        {
            id: 1,
            title: 'Green Pigeon',
            description: 'Lorem ipsum dolor sit amet; Aenean nec ex et quam convallis dictum. Ut luctus at leo id gravida. In maximus ligula sed.',
            image: GreenPigeonImage
        }
    ]

    const actualTheme = sessionStorage.getItem('theme') !== null ? sessionStorage.getItem('theme') === 'dark' : true
    const [theme, setTheme] = useState(actualTheme)
    const changeTheme = () => {
        sessionStorage.setItem('theme', !theme ? 'dark' : 'light')
        setTheme(!theme)
    }

    return (
        <ThemeProvider theme={theme ? darkTheme : lightTheme}>
            <GlobalStyles />
            <Button onClick={changeTheme}>
                <img 
                    src={
                        theme ?
                            sun :
                            moon
                    }
                    alt="icon to alternate theme"
                    />
            </Button>
            <MainTheme>
                <Container>
                    <Header>
                        <h1>Olá!</h1>
                        <h4>
                            Me chamo Leonardson, e atualmente sou desenvolvedor WEB!
                        </h4>
                    </Header>
                    <Divider href="#Info">
                        <IconDownArrow hoverEffect={true} />
                    </Divider>
                    <Info id="Info">
                        <div className="Photo" />
                        <div className="Text">
                            <h2>Sobre mim</h2>
                            <p>
                                Tenho 19 anos, estou cursando Ciência da Computação na Unisul (Universidade do Sul de Santa Catarina) e trabalho 
                                com desenvolvimento a aproximadamente 1 ano.
                                <br /> <br />
                                Iniciei na programação aos 13 anos, tentando fazer <i>mods</i> para jogos utilizando Java.
                                Aos 16 iniciei um curso Técnico em Informática no IFSC (Instituto Federal de Santa Catarina) 
                                onde me formei em 2018.
                            </p>
                        </div>
                    </Info>
                    {/* <Projects>
                        <h1 className="Title">Projetos</h1>
                        <Slider items={projects} />
                    </Projects> */}
                </Container>
            </MainTheme>
        </ThemeProvider>
    )
}

export default Main