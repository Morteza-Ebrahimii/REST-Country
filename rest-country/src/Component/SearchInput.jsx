import React,{useState} from "react"

function SearchInput({onSearch}){

    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSearch(input)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search a country..."  value={input}
             onChange={(e) => setInput(e.target.value)}/>
        </form>
    )
}
export default SearchInput