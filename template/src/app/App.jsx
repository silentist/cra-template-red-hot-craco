import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import styled, { createGlobalStyle } from 'styled-components';

import logo from '~/assets/logo.svg';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

const Container = styled.div`
  text-align: center;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #282c34;
  color: white;
  font-size: calc(10px + 2vmin);
`;

const LogoImg = styled.img`
  height: 40vmin;
  pointer-events: none;
`;

const CountButton = styled.a`
  color: #61dafb;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <LogoImg src={logo} alt="logo" />
          <p>
            Count: <code>{count}</code>
          </p>
          <CountButton type="button" onClick={() => setCount(count + 1)}>
            Add count
          </CountButton>
        </Header>
      </Container>
    </>
  );
}

export default hot(App);
