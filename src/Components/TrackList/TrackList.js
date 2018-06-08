import React from 'react';
import './TrackList.css';

class TrackList extends React.Component{
    render(){
    return(
      <div class="TrackList">
        {
          this.props.tracks.map(track => {
            return <Track track={track}
                          key={track.id}
                          onAdd={this.props.onAdd}
                          isRemoval={this.props.isRemoval}
                          onRemove={this.props.onRemove} />
          })
        }
      </div>
    )
  }
}
export default TrackList;
