import React, { Component } from 'react';
import { connect } from 'react-redux';
import SectionLayout from "../../components/section-layout";
import { createNews, getNewsById, updateNews } from '../../store/actions';

import './news-form.scss';
class NewsForm extends Component {
  state = {
    title: this.props.oneNews.title,
    description: this.props.oneNews.description,
    id: this.props.oneNews.id,
  };

  componentDidMount() {
    const { dispatch, match } = this.props;
    const {
      params: { id },
    } = match;

    if (id) {
      dispatch(getNewsById(id));
    }
  }

  handleChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;

    this.setState({[name]: value});
  }

  handleSubmit = async () => {
    const { dispatch, history } = this.props;
    const { id } = this.state;

    if(id) {
      await dispatch(updateNews(this.state));
    } else {
      await dispatch(createNews(this.state));
    }

    history.push('/news');
  }

  render() {
    const { title, description, id } = this.state;
    const { oneNews } = this.props;

    return (
      <div className="news-form">
        <SectionLayout>
        <header className="news-form__header">News Form</header>
          <form className="news-form__form">
            <label className="news-form__label">
              Title
              <input
                type="text"
                value={title}
                name="title"
                onChange={this.handleChange}
                className="news-form__input"
              />
            </label>

            <label className="news-form__label">
              Description:
              <textarea
                value={description}
                name="description"
                onChange={this.handleChange}
                className="news-form__textarea"
              />
            </label>

            <button
              onClick={this.handleSubmit}
              type="button"
              className="news-form__save-button"
            >
              Save
            </button>
          </form>
        </SectionLayout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  oneNews: state.news.getNewsById,
});

export default connect(mapStateToProps)(NewsForm);
