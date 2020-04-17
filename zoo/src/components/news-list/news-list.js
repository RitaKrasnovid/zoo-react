import React from "react";
import SectionLayout from "../section-layout";
import NewsCard from "../news-card";
import "./news-list.scss";

const NewsList = ({ news }) => {
  const elements = news.map(item => {
    const { id } = item;

    return (
      <li key={id} className="newsList__card">
        <NewsCard {...item} />
      </li>
    );
  });

  return (
    <SectionLayout>
      <header className="newsList__cardHeader">Articles</header>
      <ul className="newsList">{elements}</ul>
    </SectionLayout>
  );
};

export default NewsList;
