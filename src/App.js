import React, { useState } from 'react';
import './App.css';
import SearchForm from './component/search_form';

function App() {

  const [id, setId] = useState(null);
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async(id) => {
    setId(id);
    const data = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
    const result = await data.json();
    console.log(result);
    setPhotos(result);
  }

  return (
    <React.Fragment>
      <SearchForm fetchPhotos={fetchPhotos}/>
      <div className="content">
       {photos.length > 0 && photos.map(photo => {
         return <div key={photo.id}>
           <h3>{photo.title}</h3>
           <img src={photo.thumbnailUrl}/>
         </div>
       })
       }
       {
         id && photos.length == 0 && <div className="no-content">No photos in this album</div>
       }
       {
         !id && photos.length == 0 && <div className="no-content">Enter id to get photos</div>
       }
      </div>
    </React.Fragment>

  );
}

export default App;
