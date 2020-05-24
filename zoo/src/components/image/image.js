import React, { Component } from "react";

export default class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: './images/default-image.png',
      alt: 'unknown',
    };
  }

  componentDidMount() {
    if (this.props.src) {
      this.setState({
        url: `data:image/jpg;base64,${this.props.src.data}`,
        alt: this.props.src.title,
      });
    }
  }

  render() {
    const { url, alt } = this.state;
    const { className } = this.props;

    return <img
        className={className}
        src={url}
        alt={alt} />
  }
}
