import React, { useState } from "react"

function SearchInput({ onSearch }) {

    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSearch(input)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-icon position-relative">
                {input === '' && <i className="bi bi-search position-absolute "></i>}

                <input type="text" placeholder="Search for a country..." value={input}
                    onChange={(e) => setInput(e.target.value)} />

            </div>
        </form>
    )
}
export default SearchInput