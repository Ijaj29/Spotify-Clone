import React from "react";
import "./Card.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useStateContext } from "../../context/ContextProvider";

export default function Card(props) {
  const { IMG_URL } = useStateContext();
  console.log("IMG_URL :",  props.video);

  useEffect(() => {}, []);

  return (
    <div>
      <a href={IMG_URL + "/assets/" + props.video}>
        <img
          className="card_poster"
          src={IMG_URL + "/assets/" + props.img}
          alt="poster"
        />
      </a>
    </div>
  );
}
