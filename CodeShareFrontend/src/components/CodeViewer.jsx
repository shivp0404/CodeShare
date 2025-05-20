import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Import the Dracula theme

const CodeViewer = ({ codeString }) => {

  return (
    <div>
      <SyntaxHighlighter language="jsx" style={dracula}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeViewer;


