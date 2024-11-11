import React from 'react';
import './Card2.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useStateContext } from '../../context/ContextProvider';


export default function Card(props) {

  const { IMG_URL } = useStateContext();

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



