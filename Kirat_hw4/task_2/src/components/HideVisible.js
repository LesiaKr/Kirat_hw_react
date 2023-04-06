import React from 'react';
import NewsBlock from './NewsBlock';

class HideVisible extends React.Component {

  state = {
    isVisible: false
  }
  
  handleClick = () => {
      this.setState(prev => ({isVisible: !prev.isVisible}));
  }

  componentDidUpdate() {
      if(this.state.isVisible){
          alert('Open block');
      } else{
          alert('Close block');
      }
  }
 
  render() {
    let wordBtn = "";
    if(this.state.isVisible){
      wordBtn = "Close news";
    }else{
      wordBtn = "Open news";
    }
    
    return (
      <div>
        <button onClick={this.handleClick}>
          {wordBtn}
        </button>
        {this.state.isVisible && <NewsBlock />}
      </div>
    )
  }
}

export default HideVisible;