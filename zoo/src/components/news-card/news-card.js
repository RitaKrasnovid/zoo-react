import React, { Component } from "react";

import "./news-card.scss";

export default class NewsCard extends Component {
  state = {
    hide: false
  };

  onShowMore = () => {
    this.setState(({ hide }) => {
      return {
        hide: !hide
      };
    });
  };

  render() {
    const { date, title, description } = this.props;
    const { hide } = this.state;

    return (
      <div className="news-card">
        <div className="news-card__date">{date}</div>
        <div className="news-card__title">{title}</div>
        <div className="news-card__content">
          <img src="./images/elefant.jpg" className="news-card__image" alt="elefant" />
          <div
            className={`news-card__showMoreLink ${hide ? "hide" : ""}`}
            onClick={this.onShowMore}
          >
            More...
          </div>
          <div className={`news-card__description ${hide ? "show" : ""}`}>
            {description}
            <div
              className={`news-card__hideLink ${hide ? "show" : ""}`}
              onClick={this.onShowMore}
            >
              Hide
            </div>
          </div>
        </div>
      </div>
    );
  }
}
