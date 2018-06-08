import React from 'react';
import 'Track.css';

class Track Extends React.Component{
  renderAction=()=>{
    if (isRemoval===true){
      return(
        <div>
          <a href="#">-</a>
        </div>
        )
      } else{
        return(
         <div>
          <a href="#">+</a>
        </div>
        )
      }
    }
  }
  render(){
    return(
      <div class="Track">
        <div class="Track-information">
          <h3><!-- track name will go here --></h3>
          <p><!-- track artist will go here--> | <!-- track album will go here --></p>
        </div>
        <a class="Track-action">{renderAction()}</a>
      </div>
    )
  }
}

export default Track;
