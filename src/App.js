import React, { useState } from "react";
import Main from "./pages/main/Main";
import { ThemesContext, themes } from './themes/themes'
import './App.css'

function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.ligth)

  const toggleTheme = () => {
    setCurrentTheme(prevTheme => prevTheme === themes.ligth ? themes.dark : themes.ligth)
  }

  return (
    <div className="app">
      <ThemesContext.Provider value={currentTheme}>
        <Main toggleTheme={toggleTheme} />
      </ThemesContext.Provider>
    </div>
  );
}

export default App;
