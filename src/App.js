import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/globals";
import { Wrapper, Container, Content } from "./styles/components";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Player from "./components/Player";
import Routes from "./routes";

const App = () => (
  <BrowserRouter>
    <Fragment>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </Fragment>
  </BrowserRouter>
);

export default App;
