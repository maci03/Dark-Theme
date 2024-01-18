import { useState } from 'react';
import './App.css';
import styled, {ThemeProvider} from "stled-components";
import { lightTheme, darkTheme } from './Themes';

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor}; 
`;

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
  }
  return (
  <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
  <GlobalStyles />
      <StyledApp>hello</StyledApp>
      <button onClick={() => themeToggler()}>change color</button>
  </ThemeProvider>
  )
}

export default App;
