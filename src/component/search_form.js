import React, { useState } from 'react'

const SearchForm = ({fetchPhotos}) => {

    const [id, setId] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchPhotos(id);
    }

    const handleChange = (e) => {
        setId(e.target.value);
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} name="id" value={id} autoComplete="off"/>
            <button>Get Album Photos By Id</button>
        </form>
    )
}

export default SearchForm;