import React, { useEffect, useState } from 'react';
import { API_KEY, imageUrl } from '../../Constants/constants';
import './Banner.css';
import axios from '../../axios';

function Banner() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const randomPage = Math.floor(Math.random() * 20) + 1; // Adjust the range as needed
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US&page=${randomPage}`)
      .then((response) => {
        setMovie(response.data.results[0]);
      });
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : "" })` }}
      className='banner'
    >
      <div className='content'>
        <h1 className='title'>{movie ? movie.title : ""}</h1>
        <div className='banner_buttons'>
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>
        <br />
        <h1 className='description'>{movie ? movie.overview : ""}</h1>
      </div>
      <div className='fade_bottom'></div>
    </div>
  );
}

export default Banner;
