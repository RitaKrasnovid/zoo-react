import React, { Component } from 'react';
import { connect } from 'react-redux';
import SectionLayout from "../../components/section-layout";
import { createNews, getNewsById, updateNews } from '../../store/actions';

import './news-form.scss';
class NewsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.oneNews.title,
      description: props.oneNews.description,
      id: props.oneNews.id,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const { dispatch, match } = this.props;
    const {
      params: { id },
    } = match;

    if (id) {
      dispatch(getNewsById(id));
    }
  }

  handleChange(event) {
    const { name } = event.target;
    const { value } = event.target;

    this.setState({[name]: value});
  }

  async handleSubmit() {
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
