import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    // console.log("in card front")
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    )
  }
}


