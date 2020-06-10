import React, { useState, useEffect } from "react";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../themes/themes";
import { getUserTheme, changeTheme } from "../themes/themes";

import { MainTheme, Container, ButtonSetTheme } from "../themes/styles";
import Projects from "../components/Projects";
import Head from "../components/Head";
import MainComponent from "../components/Main";
import Info from "../components/Info";
import Divider from "../components/Divider";

const Main = () => {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    getUserTheme(setTheme);
  });

  return (
    <>
      <Head />
      <ThemeProvider theme={theme ? darkTheme : lightTheme}>
        <ButtonSetTheme onClick={() => changeTheme(theme, setTheme)}>
          <img
            src={`/static/${theme ? "sun" : "moon"}.svg`}
            alt="icon to alternate theme"
          />
        </ButtonSetTheme>
        <MainTheme>
          <Container>

            <MainComponent />
            <Divider />
            <Info />
            <Projects />

          </Container>
        </MainTheme>
      </ThemeProvider>
    </>
  );
};

export default Main;
