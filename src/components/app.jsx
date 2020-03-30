import React, { Component } from 'react';
import giphy from 'giphy-api';
import Search from './search.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {

  constructor (props) {
    super(props);

    this.searchGif("Rick and morty");

    this.state = {
      gifs_array: [
        // { id: "tJqyalvo9ahykfykAj" },
        // { id: "WVudyGEaizNeg" },
        // { id: "uZrLs0rcNc9sA" },
        // { id: "ayQ99hp01HFN6" }
        ],
      selectedGifId: "tJqyalvo9ahykfykAj"
    };
  }
//because I want to change the state of the app, meaning to add gifs ID, based on the search of the textfield

searchGif = (query) => {
  giphy("7mvC06wg1qzoqol884eCuOuXx7Kbdk8x").search({
    q: query,
    rating: 'g' },
     (error, result) => {
      // console.log(result); Now I now what is in the api
      this.setState({
         gifs_array: result.data //retruns an array with gif id
      });

  });
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
