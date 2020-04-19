import React, { Component } from "react";
import SectionLayout from "../../components/section-layout";
import NewsList from "../../components/news-list";
import ApiService from '../../services/api-service';

import "./newsPage.scss";

const DEFAULT_LIST_SIZE = 3;

export default class NewsPage extends Component {
  apiService = new ApiService();

  state = {
    maxListSize: DEFAULT_LIST_SIZE,
    news: [],
  };

  constructor() {
    super();
    this.updateNewsList();
  };

  updateNewsList() {
    this.apiService.getAllNews().then(data => {
      this.setState(() => {
        return {
          news: data.map(n => {
            return {
              ...n,
            }
          })
        }
      });
    })
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
    const { news } = this.state;

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
