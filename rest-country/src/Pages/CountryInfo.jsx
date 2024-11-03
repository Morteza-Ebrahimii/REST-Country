import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CardCountry from "../Component/CardCountry";

function CountryInfo() {

    const [country, setCountry] = useState([])
    const [isLoading, setIsLoading] = useState([true])
    const [error, setError] = useState('')

    const { countryName } = useParams()



    useEffect(() => {
        const getCountryByName = async () => {
            try {
                const res = await fetch('/data.json')
                if (!res.ok) throw new Error('Could not found!')

                const data = await res.json()

                const filteredCountries = data.filter(country =>
                    country.name.toLowerCase().includes(countryName.toLowerCase())
                );
                setCountry(filteredCountries)
                setIsLoading(false)



            } catch (error) {
                setIsLoading(false)
                setError(error.message)
            }

        }
        getCountryByName()
    }, [countryName])

    { isLoading && !error && <h4>Loading...</h4> }
    { !isLoading && error && { error } }


    return (
        <div className="country__info__wrapper">
            <button className="back-button"><Link to={'/'}>Back</Link></button>


            {country?.map((country, index) => (
                <CardCountry country={country} key={index} />
            ))}



        </div>
    )

}
export default CountryInfo