import React from 'react';
import './App.css';
import marked from 'marked';


marked.setOptions({breaks: true,});

class Previewer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let markUp = marked(this.props.input);
        
        return (
        <div id="previewerWindow" className="mainBox">
            <div className="title"> 
            (<i className="fa fa-flask"></i>) - <strong>Previewer</strong>
            </div>
            <div className="lowerBox" id="preview" dangerouslySetInnerHTML={{__html: markUp}}>
            </div>
        </div>  
        )
    }
}

export default Previewer;