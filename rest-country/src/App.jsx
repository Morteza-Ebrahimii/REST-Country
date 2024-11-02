import { Routes, Route } from 'react-router-dom'
import './app.css'
import AllCountries from './Component/AllCountries'
import CountryInfo from './Component/CountryInfo'

function App() {

  return (
    <>
      <header className="header">
        <div className="container">
          <h5>Where in the world </h5>
        </div>
      </header>
      <div className="container">
        <Routes>
          <Route index element={<AllCountries />}></Route>
          <Route path='/country/:countryName' element={<CountryInfo />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
