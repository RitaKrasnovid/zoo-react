import React, { Component } from "react";
import YouTube from 'react-youtube';

class YouTubeVideo extends Component {
  onReady(event) {
    event.target.pauseVideo();
  }

  render = () => {
    const { id } = this.props;
    const opts = {
      width: '100%',
      playerVars: {
        autoplay: 1,
        modestbranding: 1,
        showinfo: 0,
      },
    };

    return (
      <div>
        <YouTube videoId={id} opts={opts} onReady={this.onReady} />
      </div>
    );
  };
}

export default YouTubeVideo;
