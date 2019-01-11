import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/globals";
import { Wrapper, Container, Content } from "./styles/components";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Player from "./components/Player";
import Routes from "./routes";
import "./config/reactotron";
import store from "./store";

const App = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
