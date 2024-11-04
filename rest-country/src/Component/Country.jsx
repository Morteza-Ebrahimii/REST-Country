// src/Component/Country.jsx
function Country({ country }) {
    return (
        <div className="country__cart">
            <div className="country__img">
                <img src={country.flags.png} alt={country.name} />
            </div>
            <div className="country__data">
                <h3>{country.name}</h3>
                <h6>Population: <span>{new Intl.NumberFormat().format(country.population)}</span></h6>
                <h6>Region: <span>{country.region}</span></h6>
                <h6>Capital: <span>{country.capital}</span></h6>
            </div>
        </div>
    );
}
export default Country;