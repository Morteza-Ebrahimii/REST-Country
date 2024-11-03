

function FilterCountry({ onSelect }) {
    

    const handleSelect = (e) => {
        const regionName = e.target.value
        onSelect(regionName)
    }

    return (
        <select onChange={handleSelect}>
            <option>Filter by region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="asia">asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    )
}
export default FilterCountry