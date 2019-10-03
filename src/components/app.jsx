import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif.jsx';
import GifsList from './gifs-list.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGif: ""
    };
  }

  search = (query) => {
    giphy('aOY3wOW99uBb3PEaS1cDavmRDZIchp9o').search({
      q: query,
      rating: 'g'
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  selectAGif = (id) => {
    this.setState({
      selectedGif: <Gif id={id} />
    });
  }

  render() {
    // const gifs =
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            {this.state.selectedGif}
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <GifsList gifs={this.state.gifs} select={this.selectAGif} />
           </div>
        </div>
      </div>
    );
  }
}

export default App;
