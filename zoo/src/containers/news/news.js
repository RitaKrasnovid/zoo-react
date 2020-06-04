import React, { Component } from "react";
import { connect } from 'react-redux';
import { getAllNews } from '../../store/actions';

import SectionLayout from "../../components/section-layout";
import NewsList from "../../components/news-list";

import "./news.scss";

const DEFAULT_LIST_SIZE = 3;

class NewsPage extends Component {
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

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getAllNews());
  }

  render() {
    const { maxListSize } = this.state;
    const { news } = this.props;

    const renderedNews = news.slice(0, maxListSize);
    let classButton = 'news__button';

    if(news.length === 0 || news.length === renderedNews.length) {
      classButton += ' hide';
    }

    return (
      <div className="news">
        <SectionLayout>
          <header className="news__header">Articles</header>
          <NewsList news={renderedNews} />
          <button onClick={this.loadMore} className={classButton}>Load more</button>
        </SectionLayout>
      </div>
    );
  }
}

NewsPage.defaultProps = {
  news: [],
};


const mapStateToProps = state => ({
  news: state.news.getAll,
});

export default connect(mapStateToProps)(NewsPage);
