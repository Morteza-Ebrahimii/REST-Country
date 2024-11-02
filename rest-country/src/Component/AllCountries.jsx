import React, { useState, useEffect } from "react";
import Country from './Country'

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

    return (
        <div className="all__country__wrapper">
            <div className="country__top">
            </div>

            <div className="country__buttom">
                {isLoading && !error && <h4>Loading...</h4>}
                {error && !isLoading && <h4>{error}</h4>}

                {countries?.map(country => (

                    <Country country={country} key={country.name}/>

                ))}
            </div>
        </div>
    )
}
export default AllCountries