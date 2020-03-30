import React, { Component } from 'react';
import Gif from './gif.jsx';

class GifList extends Component {
  render () {
    return (
      <div className = 'gif-list'>
        {this.props.gifs.map(g => {
          return <Gif id={g.id} key={g.id} />
          })
        }
      </div>
    );
  }
}


export default GifList;
