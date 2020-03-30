import React, { Component } from 'react';

class Gif extends Component {


  gifUrl() {
    let url = 'https://media.giphy.com/media/';
    url += this.props.id;
    url += '/giphy.gif';

    return url;
  }


  render () {
    return (
     <img src= {this.gifUrl()} className="gif" />
    );
  }
}


export default Gif;
