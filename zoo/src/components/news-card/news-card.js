import React, { Component } from "react";
import Image from "../image/";
import YouTubeVideo from '../video-player';

import "./news-card.scss";

export default class NewsCard extends Component {
  state = {
    hide: false,
    showVideo: false,
  };

  onShowMore = () => {
    this.setState(({ hide }) => {
      return {
        hide: !hide,
      };
    });
  };

  render() {
    const { date, id, title, description, images, videoId, editable, deleteNews, editNews } = this.props;
    const { hide } = this.state;
    const showVideo = !!videoId;

    let iframe;

    if(showVideo) {
      iframe = <YouTubeVideo id={videoId} />
    }

    let editCard;

    if(editable) {
      editCard =
        <div className="news-card__button-group">
          <button className="news-card__button-group--edit" onClick={() => editNews(id)}>
            Edit
          </button>
          <button className="news-card__button-group--delete" onClick={() => deleteNews(id)}>
            Delete
          </button>
        </div>
    }

    return (
      <div className="news-card">
        <div className="news-card__date">{date}</div>
        <div className="news-card__title">
          <div>{title}</div>
          <div>{editCard}</div>
        </div>
        <div className="news-card__content">
          <Image src={images && images.length ? images[0] : null} className="news-card__image" />
          <div
            className={`news-card__showMoreLink ${hide ? "hide" : ""}`}
            onClick={this.onShowMore}
          >
            More...
          </div>
          <div className={`news-card__description ${hide ? "show" : ""}`}>
            {description}
            {iframe}
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
