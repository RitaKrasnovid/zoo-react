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
      <div className="newsCard">
        <div className="newsCard__date">{date}</div>
        <div className="newsCard__title">{title}</div>
        <div className="newsCard__content">
          <img src="./images/elefant.jpg" className="newsCard__image" />
          <div
            className={`newsCard__showMoreLink ${hide ? "hide" : ""}`}
            onClick={this.onShowMore}
          >
            More...
          </div>
          <div className={`newsCard__description ${hide ? "show" : ""}`}>
            {description}
            <div
              className={`newsCard__hideLink ${hide ? "show" : ""}`}
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
