import React, { useState, useContext } from "react"
import { Routes, Route, Link } from "react-router-dom"
import { ThemesContext, themes } from './themes/themes'
import './App.css'
import Header from "./components/header/Header"
import MainPage from "./pages/MainPage/MainPage"
import ContactPage from './pages/ContactPage/ContactPage'
import AboutPage from './pages/AboutPage/AboutPage'
import ServicePage from './pages/ServicePage/ServicePage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Form from "./components/form/Form"

function App() {
  const theme = useContext(ThemesContext)
  const [currentTheme, setCurrentTheme] = useState(themes.ligth)


  const toggleTheme = () => setCurrentTheme(prevTheme => prevTheme === themes.ligth ? themes.dark : themes.ligth)


  return (
    <>
      <ThemesContext.Provider value={currentTheme}>
        <div className="app">
          
            <Header toggleTheme={toggleTheme} />

            <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/service' element={<ServicePage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path='*' element={<ErrorPage />} />
            </Routes>
        </div>
        
      </ThemesContext.Provider>
    </>
  );
}

export default App
