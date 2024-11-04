// src/Component/CardCountry.jsx
import React from 'react';

function CardCountry({ country }) {
    return (
        <div className="country__info__container">
            <div className="country__info__img">
                <img src={country.flags.png} alt={country.name} />
            </div>
            <div className="country__info">
                <h3>{country.name}</h3>
                <div className="country__info-left">
                    <h5>Population: <span>{new Intl.NumberFormat().format(country.population)}</span></h5>
                    <h5>Region: <span>{country.region}</span></h5>
                    <h5>Sub Region: <span>{country.subregion}</span></h5>
                    <h5>Capital: <span>{country.capital}</span></h5>
                    <h5>Top Level Domain: <span>{country.topLevelDomain}</span></h5>
                    <h5>Currencies: <span>{country.currencies[0]?.name}</span></h5>
                    <h5>Languages: <span>{country.languages.map(lang => lang.name).join(', ')}</span></h5>
                </div>
            </div>
        </div>
    );
}
export default CardCountry;