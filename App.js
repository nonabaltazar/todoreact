import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Note from './Note'


class App extends Component {
  constructor(){
    super();
    this.state={
      list: [
        "cute", "wow", "nice"
      ]
    }
    this.addItems=this.addItems.bind(this);
    this.updateNote=this.updateNote.bind(this);
    this.removeNote=this.removeNote.bind(this);
    this.newNote=this.newNote.bind(this);
    }

 
addItems(item,i){
  return(
    <Note key={i} id={i} updateNote={this.updateNote} removeNote={this.removeNote} getNote={this.getNote} item={item}><span>{item}</span></Note>
  )
}


updateNote(text,i){
  var arr=this.state.list;
  arr[i]=text;
  this.setState({list: arr})
}

removeNote(i){
  var arr=this.state.list;
  arr.splice(i,1);
  this.setState({list:arr})
}

newNote(){
  var text= "New Text";
  var arr=this.state.list;
  arr.push(text);
  this.setState({list: arr})
}


  render() {
    return (
      <div className="App">
       ToDo List: <br/>
      
        <br/><br/>
       <button onClick={this.newNote}>Add Note</button>
       
      {
this.state.list.map((this.addItems))
       
      }  
      </div>
    );
  }
}

export default App;
