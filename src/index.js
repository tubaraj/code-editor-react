import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import { Highlight, themes } from "prism-react-renderer";
import "./editor.css";

// Initial code block to be displayed and edited
const codeBlock = `
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <h1>Hello world</h1>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
`;

const CodeEditor = () => {
  // State to hold the current code in the editor
  const [code, setCode] = useState(codeBlock);

  // Handler for changes in the textarea
  const handleCodeChange = (event) => {
    setCode(event.target.value); // Update the state with the new code
  };

  // Handler for synchronizing scroll positions between textarea and highlighted code
  const handleScroll = (event) => {
    const { scrollTop, scrollLeft } = event.target;
    // Synchronize the scroll position of the highlighted code with the textarea
    document.querySelector('.highlighted-code').scrollTop = scrollTop;
    document.querySelector('.highlighted-code').scrollLeft = scrollLeft;
  };

  return (
    <div className="code-editor">
      <Highlight
        theme={themes.dracula} // Using the Dracula theme for syntax highlighting
        code={code} // Code to be highlighted
        language="jsx" // Language of the code for proper syntax highlighting
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${className} highlighted-code`} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span className="line-number">{i + 1}</span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <textarea
        className="code-input" // Class for styling the textarea
        value={code} // Setting the value of the textarea to the current code
        onChange={handleCodeChange} // Handler for changes in the textarea
        onScroll={handleScroll} // Handler for scrolling
        spellCheck={false} // Disable spell check
        autoComplete="off" // Disable autocomplete
        autoCorrect="off" // Disable autocorrect
        autoCapitalize="off" // Disable autocapitalization
      />
    </div>
  );
};

export default CodeEditor;

// Render the CodeEditor component into the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CodeEditor />);
