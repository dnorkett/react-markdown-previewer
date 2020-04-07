import React from 'react';
import './App.css';
import Editor from './Editor';
import Previewer from './Previewer';

const INITIAL_VALUE = `# React Github-Markdown Previewer!

## Here's an H2 element! What else can we do???
  
How about some inline code? \`<div>some inline code</div>\`


\`\`\`
// Now lets look at some multi-line code:

function helloWorld() {
  console.log("Hello world!");
}
\`\`\`

Perhaps you want some **bold** text?

There's also [links](https://www.freecodecamp.com), and even
> Block Quotes!

We can also do a list:
- Like this
- and this...
- ...and this!
  
You can even use images. This preview was made with REACT!
![React Logo w/ Text](https://goo.gl/Umyytc)
`

class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          input: INITIAL_VALUE
      }
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
      this.setState({
          input: e.target.value
      });
  }
  
  render() {
    return (
      <div id="main">
        <Editor input={this.state.input} handleChange={this.handleChange} />
        <Previewer input={this.state.input}/>
      </div>
    );
  }
}

export default App;