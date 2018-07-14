import React, { Component } from 'react';
import './App.css';
import PostIt from './Components'

class App extends Component {
  constructor(){
    super();
    this.state={
      comments: []
    }
    this.removeComment=this.removeComment.bind(this);
    this.updateComment=this.updateComment.bind(this)
  
      
  }

  add(text){
    var arr=this.state.comments;
    arr.push(text);
    this.setState({
      comments: arr
    })
  }

  removeComment(i){
    console.log(i);
    var arr=this.state.comments;
    arr.splice(i,1)
    this.setState({
      comments: arr,
    })
  }

  updateComment(newText,i){
    var arr=this.state.comments;
    arr[i]=newText;
    this.setState({
      comments: arr,
    })

  }

  eachComment(item, i){
  return (
  <PostIt key={i} index={i} 
  deleteComment={this.removeComment}
  updateCommentText={this.updateComment}
  
   >
   {item}
   </PostIt>)
  }
  
  render() {
    
   
    return (
      <div className="commentBoard">
        <button onClick={this.add.bind(this,"Edit Me!")}>Add New</button><br/>
        Comment Board Goes Here:
        {
          this.state.comments.map(this.eachComment,this)

        }
        
       
      </div>
    );
  }
}

export default App;
