import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

class Editor extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render() {
      return (
        <div id="editorWindow" className="mainBox">
          <div className="title"> 
            (<i className="fa fa-flask"></i>) - <strong>Editor</strong>
          </div>
          <div className="lowerBox">
            <textarea id="editor" value={this.props.input} onChange={this.props.handleChange}> </textarea>
          </div>
        </div>  
      )
    }
  }

  export default Editor;