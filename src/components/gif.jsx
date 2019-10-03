import React, { Component } from 'react';


class Gif extends Component {


  select = (event) => {
    this.props.clicked(this.props.id);
  }
  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/giphy.webp`;
    return (
      <img src={src} alt="" onClick={this.select}/>
    )
  }
}
 export default Gif;
