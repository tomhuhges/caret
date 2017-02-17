import React from 'react'
import ReactCodeMirror from 'react-codemirror'
import CodeMirror from '../../node_modules/codemirror/'

require('../../node_modules/codemirror/mode/jsx/jsx')
require('../../node_modules/codemirror/mode/javascript/javascript')
require('../../node_modules/codemirror/mode/gfm/gfm')
require('../../node_modules/codemirror/addon/wrap/hardwrap')

class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.updateFile = this.updateFile.bind(this)
    this.state = {
      value: 'Time overlaps itself. A breath breathed from a passing'
      + ' breeze is not the whole wind, neither is it just the'
      + ' last of what has passed and the first of what will come,'
      + ' but is more - let me see - more like a single point'
      + ' plucked on a single strand of a vast spider web of winds,'
      + ' setting the whole scene atingle. That way; it overlaps ...'
      + ' As prehistoric ferns grow from bathtub planters. As a'
      + ' shiny new ax, taking a swing at somebody\'s next year\'s'
      + ' split-level pinewood pad, bites all the way to the Civil'
      + ' War. As proposed highways break down through the stacked'
      + ' strata of centuries.'
      + ' \n\n\t— Ken Kesey, Sometimes A Great Notion',
    }
  }
  updateFile(value) {
    this.setState({ value })
  }
  render() {
    const editor = 'editor'
    return (
      <div className="mw9 pv6 center w-50 f4 lh-copy">
        <ReactCodeMirror
          {...this.state}
          onChange={this.updateFile}
          options={{
            mode: 'gfm',
            lineWrapping: true,
          }}
          ref={editor}
        />
      </div>
    )
  }
}

export default Editor
