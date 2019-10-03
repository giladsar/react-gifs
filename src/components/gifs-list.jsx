import React, { Component } from 'react';

import Gif from './gif';

class GifsList extends Component {
  clicked = (id) => {
    this.props.select(id);
  }

  render() {
    return this.props.gifs.map(gif => {
      return <Gif id={gif.id} clicked={this.clicked}/>;
    });
  }
}
export default GifsList;
