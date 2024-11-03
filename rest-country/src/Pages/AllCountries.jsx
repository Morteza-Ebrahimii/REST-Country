import React, { useState, useEffect } from "react";
import Country from '../Component/Country'
import SearchInput from "../Component/SearchInput";
import Container from 'react-bootstrap/Container';
import FilterCountry from "../Component/FilterCountry";
import {Link} from 'react-router-dom'

function AllCountries() {

    const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    const getAllCountries = async () => {

        try {
            const res = await fetch('/data.json')
            if (!res.ok) throw new Error('something went wrong!')

            const data = await res.json()

            console.log(data);

            setCountries(data)
            setIsLoading(false)

        } catch (error) {
            setIsLoading(false)
            setError(error.message)
        }
    }

    const getCountryByName = async (countryName) => {
        try {
            const res = await fetch('/data.json')
            if (!res.ok) throw new Error('Not found any country!')

            const data = await res.json()

            const filteredCountries = data.filter(country =>
                country.name.toLowerCase().includes(countryName.toLowerCase())
            );
            setCountries(filteredCountries)
            setIsLoading(false)



        } catch (error) {
            setIsLoading(false)
            setError(error.message)
        }

    }

    const getCountryByRegion = async(regionName) => {
        try {
            const res = await fetch('/data.json')
            if (!res.ok) throw new Error('failed....!')

            const data = await res.json()

            const filteredCountries = data.filter(country =>
                country.region.toLowerCase().includes(regionName.toLowerCase())
            );
            setCountries(filteredCountries)
            setIsLoading(false)



        } catch (error) {
            setIsLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        getAllCountries()
    }, [])


    return (
        <Container className="all__country__wrapper">
            <div className="country__top">
                <div
                    className="search">
                    <SearchInput onSearch={getCountryByName} />
                </div>
                <div className="filter">
                    < FilterCountry onSelect={getCountryByRegion} />
                </div>
            </div>

            <div className="country__buttom">
                {isLoading && !error && <h4>Loading...</h4>}
                {error && !isLoading && <h4>{error}</h4>}

                {countries?.map(country => (
                   <Link to={`/country/${country.name}`} key={country.name}>
                    <Country country={country}  />
                   </Link>
                ))}
            </div>
        </Container>
    )
}
export default AllCountries