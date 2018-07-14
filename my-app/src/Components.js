import React, { Component } from 'react';
import './App.css';

class PostIt extends Component {
  constructor(){
    super();
    this.state={
      editing: false,
    }
    this.edit=this.edit.bind(this);
    this.remove=this.remove.bind(this);
    this.save=this.save.bind(this)
    }
  
  edit(){
    this.setState({editing: true})
  }
  save(){
    var val= this.refs.newText.value;
    console.log(val)
    this.props.updateCommentText(this.refs.newText.value, this.props.index)
    this.setState({editing: false});

    
    }

  remove(){
    this.props.deleteComment(this.props.index)
  }


  render() {
      
    return (
     <div>
      {this.state.editing ? 
        (<div className="postIt">
      <textarea defaultValue='' ref="newText"></textarea>
        <button 
        className="saving"
        onClick={this.save}
        >Save
        </button>
             
      </div>)
      :
      (<div className="postIt">
       <div className="text">{this.props.children}</div> 
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
             
      </div>)  
      
      
      
      
      
      }


      </div>
     
    );
  }
}

export default PostIt;
