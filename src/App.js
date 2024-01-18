import { useState } from 'react';
import './App.css';
import {ThemeProvider} from "stled-components";
import { lightTheme, darkTheme } from './Themes';

const StyledApp = styled.div``;

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
  }
  return (
  <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <StyledApp>hello</StyledApp>
  </ThemeProvider>
  )
}

export default App;
