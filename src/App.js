import React, { useState } from 'react';
import './App.css';
import SearchForm from './component/search_form';

function App() {

  const [photos, setPhotos] = useState([]);

  const fetchPhotos = (id) => {
    console.log(id);
    // const data = fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }

  return (
    <React.Fragment>
      <SearchForm fetchPhotos={fetchPhotos}/>
      <div className="content">

      </div>
    </React.Fragment>

  );
}

export default App;
