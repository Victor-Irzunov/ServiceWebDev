import React, { useState, useCallback, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { useJsApiLoader } from '@react-google-maps/api'
// import { getBrowserLocation } from './utils/geo'
import {
  // Map,
  MODES
} from './components/Map-location/Map'
import { ThemesContext, themes } from './themes/themes'
import { dollarExchangeRate } from './Api-bank/api'

import './App.css'
import Header from "./components/header/Header"
import MainPage from "./pages/MainPage/MainPage"
import ContactPage from './pages/ContactPage/ContactPage'
import AboutPage from './pages/AboutPage/AboutPage'
import ServicePage3 from './pages/ServicePage3/ServicePage3'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Footer from "./components/footer/Footer"
// import { Autocomplete } from './components/Autocomplete' //delete npm use-places-autocomplete
import SideSpeedtPage from './pages/SiteSpeedPage/SiteSpeedPage'
import { SeoPage } from './pages/SeoPage/SeoPage'


const defaultCenter = {
  lat: 53.9327511,
  lng: 27.6551419
}



function App() {
  // const theme = useContext(ThemesContext)
  const [theme, setTheme] = useState(themes.dark)
  const [center, setCenter] = useState(defaultCenter)
  // const [centerUser, setCenterUser] = useState(defaultCenter)
  const [mode, setMode] = useState(MODES.MOVE)
  const [markers, setMarkers] = useState([])
  const [dollar, serDollar] = useState(null)


  const API_KEY = process.env.REACT_APP_API_KEY
  const libraries = ['places']

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
    libraries
  })

  useEffect(() => {
    dollarExchangeRate().then(data => {
      serDollar(data.data.Cur_OfficialRate)
    })
  }, [])


  // useEffect(() => {
  //   getBrowserLocation()
  //     .then(curLoc => {
  //       setCenterUser(curLoc)
  //     })
  //     .catch(defaultLocation => {
  //       setCenterUser(defaultLocation)
  //     })
  // }, [])



  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === themes.dark
      ? themes.ligth : themes.dark)
  }

  const toggleMode = useCallback(() => {
    switch (mode) {
      case MODES.MOVE:
        setMode(MODES.SET_MARKER);
        break;
      case MODES.SET_MARKER:
        setMode(MODES.MOVE)
        break;

      default:
        setMode(MODES.MOVE)
    }
  }, [mode])


  const onPlaceSelect = useCallback(coordinates => {
    setCenter(coordinates)
  }, [])

  const onMarkerAdd = useCallback((coordinates) => {
    setMarkers([...markers, coordinates])
  }, [markers])

  const clear = useCallback(() => {
    setMarkers([])
  }, [])

  return (
    <>
      <ThemesContext.Provider value={{ theme, dollar }}>
        <div className="app">
          <Header toggleTheme={toggleTheme} />

          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/service' element={<ServicePage3 />} />
            <Route path='/about' element={<AboutPage />} />
            <Route
              path='/contact'
              element={ <ContactPage
                  isLoaded={isLoaded}

                  onSelect={onPlaceSelect}
                  toggleMode={toggleMode}
                  clear={clear}

                  center={center}
                  // centerUser={centerUser}
                  mode={mode}
                  markers={markers}
                  onMarkerAdd={onMarkerAdd}
                />
              }
            />
            <Route path='/speed-info' element={<SideSpeedtPage />} />
            <Route path='/seo-info' element={<SeoPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>

          <Footer />
        </div>

      </ThemesContext.Provider>
    </>
  );
}

export default App
