import React, { Component } from 'react';
import './App.css';

class Note extends Component {
    constructor(props){
        super(props);
        this.state={
            editing: false
        }
       this.edit=this.edit.bind(this);
       this.save=this.save.bind(this);
       this.remove=this.remove.bind(this);
       this.getNote=this.getNote.bind(this)
    }

edit(){
    console.log('editing');
    this.setState({
        editing: true
    })
   }

getNote(){
    this.props.getNote(this.props.id);
    
    
     
}

save(){
    var val=this.refs.textInput.value;
    console.log(val)
    this.props.updateNote(val, this.props.id)
    this.setState({editing: false});
}

remove(){
    this.props.removeNote(this.props.id)
}


  render() {
    return (
      <div>
          {this.state.editing ?

        (
            <div>
            <textarea ref="textInput" defaultValue={this.props.item}></textarea>
            <button onClick={this.save}>Save</button>
             </div>
      )
    :
    (
         <div><div>{this.props.children}</div>
         <button onClick={this.edit}>Edit</button>
         <button onClick={this.remove}>Delete</button></div>
    )

    }
    </div>
    
    
    
    

    );
  }
}

export default Note;
