import React, { Component } from 'react';
import SectionLayout from "../../components/section-layout";

import './news-form.scss';
export default class NewsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name } = event.target;
    const { value } = event.target;

    this.setState({[name]: value});
  }

  handleSubmit(event) {
    console.log('submit', event.target);
  }

  render() {
    const { title, description } = this.state;
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
