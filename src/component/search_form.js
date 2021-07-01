import React, { useState } from 'react'

const SearchForm = () => {

    const [id, setId] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(id)
    }

    const handleChange = (e) => {
        setId(e.target.value);
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} name="id" value={id}/>
            <button>Get Album Photos By Id</button>
        </form>
    )
}

export default SearchForm;