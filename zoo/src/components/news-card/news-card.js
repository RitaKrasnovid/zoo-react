import React, { Component } from "react";
import Image from "../image/";

import "./news-card.scss";

export default class NewsCard extends Component {
  state = {
    hide: false,
  };

  onShowMore = () => {
    this.setState(({ hide }) => {
      return {
        hide: !hide,
      };
    });
  };

  render() {
    const { date, title, description, images } = this.props;
    const { hide } = this.state;

    return (
      <div className="news-card">
        <div className="news-card__date">{date}</div>
        <div className="news-card__title">{title}</div>
        <div className="news-card__content">
          <Image src={images[0]} className="news-card__image" />
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
