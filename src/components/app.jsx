import React, { Component } from 'react';
import Search from './search.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      gifs_array: [
        { id: "tJqyalvo9ahykfykAj" },
        { id: "WVudyGEaizNeg" },
        { id: "uZrLs0rcNc9sA" },
        { id: "ayQ99hp01HFN6" }],
      selectedGifId: "tJqyalvo9ahykfykAj"
    };
  }
  render () {
//creating array of gifs to pass to the list
//gifs
    // const gifs_array = [
    //   { id: "tJqyalvo9ahykfykAj"},
    //   { id: "ayQ99hp01HFN6"}
    // ];

    return (
      <div>
        <div className="left-scene">
          <Search />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs_array}/>
        </div>
      </div>
    );
  }
}


export default App;
