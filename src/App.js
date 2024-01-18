import { useState } from 'react';
import './App.css';
import {ThemeProvider} from "stled-components";


function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
  }
  return <ThemeProvider>
      <div className='App'></div>
  </ThemeProvider>
}

export default App;
