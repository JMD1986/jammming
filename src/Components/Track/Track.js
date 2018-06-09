import React from 'react';
import './Track.css';

class Track extends React.Component{
  renderAction() {
    if (this.props.isRemoval) {
      return <a className="Track-action" onClick={this.removeTrack}>-</a>
    }
    return <a className="Track-action" onClick={this.addTrack}>+</a>;
  }
  render(){
    return(
      <div class="Track">
        <div class="Track-information">
        </div>
        <a class="Track-action">{this.renderAction()}</a>
      </div>
    )
  }
}

export default Track;
