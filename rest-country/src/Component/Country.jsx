

function Country({country}){

    return(
        <>
        <div className="country__cart">
                        <div className="country__img">
                            <img src={country.flags.png} alt="" />
                        </div>

                        <div className="country__data">
                            <h3>{country.name}</h3>
                            <h6>Populatoin: <span>{new Intl.NumberFormat().format(country.population)}</span></h6>
                            <h6>Region: {country.region}</h6>
                            <h6>Capital: {country.capital}</h6>
                        </div>
                    </div>
        </>
    )
}
export default Country