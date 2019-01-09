import React, {Component} from 'react'
import './css/Content.css'

class Content extends Component{
  
  render(){
    const body=this.props.body;
    return (
      <div className="content">
        {body}
      </div>
    );
  }
}

export default Content;