import { useState } from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components/macro';
import GlobalStyle from './GlobalStyle';
import logo from './logo.svg';

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  text-align: center;

  header {
    background-color: ${(props) => props.theme.backgroundColor};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: ${(props) => props.theme.color};
  }

  header img {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    header img {
      animation: ${logoSpin} infinite 20s linear;
    }
  }
`;

const light = {
  backgroundColor: 'creme',
  color: 'hotpink',
};

const dark = {
  backgroundColor: 'black',
  color: 'white',
};

const Link = styled.a`
  color: #61dafb;
`;

function App() {
  const [theme, setTheme] = useState(dark);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <header>
          <img src={logo} alt="logo" />
          <p>
            Edit
            <code>src/App.js</code>
            and save to reload.
          </p>
          <Link
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Link>
        </header>
        <button
          type="button"
          onClick={() => setTheme(theme === dark ? light : dark)}
        >
          Change Theme
        </button>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
