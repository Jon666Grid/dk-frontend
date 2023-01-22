import "./PostCard.scss";
import React from "react";
import { Link } from "react-router-dom";

function PostCard(props) {
  function handleClick() {
    props.onCardClick(props.item);
  }

  return (
    <li className="post-card">
      <Link to="/dk-frontend/details">
        <img
          className="post-card__img"
          src={props.pictures}
          alt="картинка"
          onClick={handleClick}
        ></img>
      </Link>
      <div className="post-card__container">
        <h2 className="post-card__title">
          {props.item.title[0].toUpperCase() + props.item.title.slice(1)}
        </h2>
        <p className="post-card__autor">Author: {props.item.name}</p>
        <Link className="post-card__link" to="/dk-frontend/details" onClick={handleClick}>
          &#9658; the details
        </Link>
      </div>
    </li>
  );
}

export default PostCard;
