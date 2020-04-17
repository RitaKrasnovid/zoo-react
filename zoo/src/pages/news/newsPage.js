import React from "react";
import NewsList from "../../components/news-list";

import "./newsPage.scss";

const NewsPage = ({ news }) => {
  return (
    <div className="news">
      <NewsList news={news} />
    </div>
  );
};

export default NewsPage;
