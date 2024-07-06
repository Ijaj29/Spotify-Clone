import React from 'react';
import './Card2.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useStateContext } from '../../context/ContextProvider';


export default function Card(props) {
  const imageUrl = `https://image.tmdb.org/t/p/original/${props.poster}`;
  const [video, setVideo] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const youtubeUrl = `https://www.youtube.com/embed/`;

  const { IMG_URL } = useStateContext();
  console.log('IMG_URL :', IMG_URL);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const fetchURL = async () => {
    try {
      const response = await axios.get(`/movie/${props.id}`, {
        params: {
          append_to_response: 'videos',
        },
      });
      if (response.data.videos.results.lenght > 0) {
        setVideo(response.data.videos.results[0].key);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
  }, []);

  return (
    <div>
      <a href={IMG_URL + '/assets/' + props.audio}>
        <img className='card_poster2' src={IMG_URL + '/assets/' + props.img} alt='poster' />
      </a>
    </div>

  );
}



