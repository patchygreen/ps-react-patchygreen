import React from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'

// Using highlight.js directly because it is much smaller than react-highlight which is 170K
// import Highlight from 'react-highlight';

class CodeExample extends React.Component {
  componentDidMount() {
    hljs.registerLanguage('javascript', javascript);
    hljs.highlightBlock(this.element);
  }

  render() {
    return (
      <pre ref={ref => { this.element = ref }}>
        <code>
          {this.props.children}
        </code>
      </pre>
    )
  }
}

CodeExample.propTypes = {
  children: PropTypes.string.isRequired
}

export default CodeExample;