import './app.css'
import { Routes, Route } from 'react-router-dom'
import AllCountries from './pages/AllCountries'
import CountryInfo from './pages/CountryInfo.jsx';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"></link>

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
