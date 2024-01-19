import './App.css';
import styled, {ThemeProvider} from 'styled-components';
import {darkTheme} from "./utilities/theme";
import NavBar from "./components/NavBar";
import Person from "./components/Person";
import Skills from "./components/Skills";
import Education from "./components/Education";
import {BrowserRouter as Router} from "react-router-dom";

const Body = styled.div`
  background-color: ${({ theme}) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  color: white;
    `
;

const Wrapper = styled.div`
  background: linear-gradient(
    64.73deg,
    rgba(204, 0, 123, 0.17) 0%,
    rgba(124, 67, 12, 0.2) 50%
  ),
  linear-gradient(
        111.27deg,
        rgba(0, 50, 180, 0.03) 50%,
        rgba(0, 100, 180, 0.35) 100%
  );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
  color: white;
`

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
        <Router>
            <NavBar/>
            <Body>
                <Person></Person>
                <Wrapper>
                    <Education></Education>
                    <Skills></Skills>
                </Wrapper>
            </Body>
        </Router>
    </ThemeProvider>
  );
}

export default App;
