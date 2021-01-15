import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllNews, getAuthData } from '../../store/actions';

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
    dispatch(getAuthData());
  }

  render() {
    const { maxListSize } = this.state;
    const { news, user, isLoggedIn } = this.props;
    const logginedAdmin = isLoggedIn && user.role === 'admin';

    const renderedNews = news.slice(0, maxListSize);
    let classButton = 'news__button';
    let addButton;

    if(news.length === 0 || news.length === renderedNews.length) {
      classButton += ' hide';
    }

    if(logginedAdmin) {
      addButton =
        <Link className="news__create-button" to='/news_form'>
          Add article
        </Link>
    }

    return (
      <div className="news">
        <SectionLayout>
          <header className="news__header">
            Articles
            {addButton}
          </header>
          <NewsList news={renderedNews} editable={logginedAdmin}/>
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
  user: state.auth.getUser,
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps)(NewsPage);
