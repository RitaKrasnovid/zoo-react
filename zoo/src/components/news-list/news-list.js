import React from "react";
import NewsCard from "../news-card";
import "./news-list.scss";

const NewsList = ({ news, editable, deleteNews }) => {
  const elements = news.map(item => {
    const { id } = item;

    return (
      <li key={id} className="news-list__card">
        <NewsCard {...item} editable={editable} deleteNews={deleteNews} />
      </li>
    );
  });

  return (
      <ul className="news-list">{elements}</ul>
  );
};

export default NewsList;
