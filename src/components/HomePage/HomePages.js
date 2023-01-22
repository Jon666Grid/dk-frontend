import React, { useState } from "react";
import "./HomePages.scss";
import PostCard from "../PostCard/PostCard";
import { pictures } from "../../utils/Api";
import DetailedPage from "../DetailedPage/DetailedPage";

function HomePages(props) {
  const [postsCount, setPostsCount] = useState([]);

  const handleAddMore = () => {
    setPostsCount(props.newArr.slice(0, postsCount.length + 10));
  };

  return (
    <section className="home-pages">
      <h1 className="home-pages__posts">*** New Posts ***</h1>
      {!postsCount.length ? (
        <img
          className="home-pages__img"
          src={"https://flytothesky.ru/wp-content/uploads/2018/10/5465.gif"}
          alt="картинка"
        />
      ) : (
        <ul className="home-pages__list">
          {postsCount.map((item) => (
            <PostCard
              item={item}
              key={item.title}
              pictures={pictures}
              onCardClick={props.onClick}
            />
          ))}
        </ul>
      )}
      {postsCount.length < 100 ? (
        <button
          className="home-pages__button"
          type="button"
          onClick={handleAddMore}
        >
          {postsCount.length ? "resume" : "click to download"}
        </button>
      ) : null}
    </section>
  );
}

export default HomePages;
