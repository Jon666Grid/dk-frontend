import "./DetailedPage.scss";
import React from "react";
import { Link } from "react-router-dom";
import { pictures } from "../../utils/Api";

function DetailedPage(props) {

  console.log(props)
  return (
    <section className="detailed-page">
      <Link to='/dk-frontend' className="detailed-page__btn">Go Back</Link>
      <img className="detailed-page__img" src={pictures} alt="картинка" />
      <div className="detailed-page__container">
        <h2 className="detailed-page__title">{props.card.title[0].toUpperCase() + props.card.title.slice(1)}</h2>
        <p className="detailed-page__autor">Author: {props.card.name}</p>
        <p className="detailed-page__text">{props.card.body}</p>
      </div>
    </section>
  );
}

export default DetailedPage;
