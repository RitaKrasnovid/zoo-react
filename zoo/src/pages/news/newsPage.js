import React, { Component } from "react";
import SectionLayout from "../../components/section-layout";
import NewsList from "../../components/news-list";

import "./newsPage.scss";

const DEFAULT_LIST_SIZE = 3;

export default class NewsPage extends Component {
  state = {
    maxListSize: DEFAULT_LIST_SIZE,
  };

  loadMore = () => {
    this.setState(({ maxListSize }) => {
      return {
        maxListSize: maxListSize + DEFAULT_LIST_SIZE, // TODO lazy loading from backend
      }
    });
  };

  render() {
    const { maxListSize } = this.state;
    const { news } = this.props;

    const renderedNews = news.slice(0, maxListSize);

    return (
      <div className="news">
        <SectionLayout>
          <header className="newsList__cardHeader">Articles</header>
          <NewsList news={renderedNews} />
          <button onClick={this.loadMore} className="newsList__button">Load more</button>
        </SectionLayout>
      </div>
    );
  }
}
