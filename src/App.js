import React, { useState } from "react"
import Main from "./pages/main/Main"
import Header from "./components/header/Header"
import { ThemesContext, themes } from './themes/themes'
import './App.css'

function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.ligth)

  const toggleTheme = () => setCurrentTheme(prevTheme => prevTheme === themes.ligth ? themes.dark : themes.ligth)
  

  return (
    <ThemesContext.Provider value={currentTheme}>
      <div className="app">
        <Header toggleTheme={toggleTheme} />
        <Main />


      </div>
    </ThemesContext.Provider>
  );
}

export default App
