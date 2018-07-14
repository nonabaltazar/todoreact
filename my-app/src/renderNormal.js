import React, { Component } from 'react';
import './App.css';


class renderNormal extends Component {
  constructor(){
    super();
  }



  render() {
    return (
      <div className="postIt">
       <div>{this.props.children}</div> 
        <button 
        className="editing"
        onClick={this.edit}
        >Edit
        </button>
        <button 
        className="removing"
        onClick={this.remove}
        >Remove
        </button>
             
      </div>

    );
  }
}

export default renderNormal;
