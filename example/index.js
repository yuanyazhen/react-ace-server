import React, { Component } from 'react'
import { render } from 'react-dom'
import AceEditor from '../src/index'

class App extends Component {
  constructor() {
    super()
    this.state = {
      code: 'test'
    }
  }

  render() {
    const { code } = this.state

    return (
      <div className="editor-wrapper">
        <div className="label">
          <span>Lua-Editor</span>
        </div>
        <AceEditor
          mode="lua"
          theme="tomorrow_night_bright"
          name="ace-editor"
          width="100%"
          height="calc(100vh - 28px)"
          fontSize={12}
          value={code}
          showPrintMargin={false}
          // wrapEnabled={true}
          editorProps={{ $blockScrolling: Infinity }}
          // enableLiveAutocompletion={true}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            showLineNumbers: true,
            tabSize: 2
          }}
        />
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('example')
)
