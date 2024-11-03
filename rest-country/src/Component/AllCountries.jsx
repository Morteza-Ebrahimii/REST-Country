import React, { useState, useEffect } from "react";
import Country from './Country'
import SearchInput from "./SearchInput";
import Container from 'react-bootstrap/Container';

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

    useEffect(() => {
        getAllCountries()
    }, [])

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

    return (
        <Container className="all__country__wrapper">
            <div className="country__top">
                <div
                    className="search">
                    <SearchInput onSearch={getCountryByName} />
                </div>

            </div>

            <div className="country__buttom">
                {isLoading && !error && <h4>Loading...</h4>}
                {error && !isLoading && <h4>{error}</h4>}

                {countries?.map(country => (

                    <Country country={country} key={country.name} />

                ))}
            </div>
        </Container>
    )
}
export default AllCountries