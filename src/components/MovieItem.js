import React from 'react';
import {imageBaseUrl} from "../client";
import './MovieItem.css'
import no_photo from '../images/no_photo.png';

const MovieItem = ({title, poster_path, release_date}) => {
  const imageUrl = poster_path ? `${imageBaseUrl}/${poster_path}` : no_photo;
  return <li>
    <div>
      <img src={imageUrl} alt={title}/>
    </div>
    <div>
      <h2>{title}</h2>
      <p>{release_date}</p>
    </div>
  </li>
}

export default MovieItem;