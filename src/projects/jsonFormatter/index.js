import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './styles.css';

const JsonFormatter = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [jsonOutput, setJsonOutput] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setJsonInput(e.target.value);
    setError("");
  };

  const formatJson = () => {
    if (!jsonInput.trim()) {
      setError("Please enter JSON to format");
      setJsonOutput("");
      return;
    }

    try {
      const parsedJson = JSON.parse(jsonInput);
      const formattedJson = JSON.stringify(parsedJson, null, 2);
      const formattedText = formattedJson
          .replace(/\\n/g, '\n')
          .replace(/\\t/g, '\t');
      setJsonOutput(formattedText);
      setError("");
    } catch (err) {
      setError("Invalid JSON format");
      setJsonOutput("");
    }
  };

  return (
    <div className="page-container">
      <Header />
      <main className="project-content">
        <h1>{'{ JSON Formatter }'}</h1>
        <div className="project-details">

          <section className="project-section">
            <div className="json-container">
              <div className="json-box">
                <textarea
                  className="json-textarea"
                  onChange={handleInputChange}
                  placeholder="Enter unformatted JSON here..."
                  value={jsonInput}
                  style={{
                    width: '100%',
                    height: '100%',
                    resize: 'none'
                  }}
                />
              </div>

              <div className="json-box">
                <SyntaxHighlighter 
                  language="json" 
                  style={coy}
                  showLineNumbers={true}
                  wrapLines={true}
                  wrapLongLines={true}
                  customStyle={{
                    margin: 0,
                    padding: '0.5rem',
                    borderRadius: '4px',
                    height: '100%',
                    overflow: 'auto',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    'font-size':  '0.8rem',
                  }}
                >
                  {jsonOutput || '// Formatted JSON will appear here'}
                </SyntaxHighlighter>
              </div>
            </div>

            {error && <div className="error-message">{error}</div>}

            <div className="button-container">
              <button className="format-button" onClick={formatJson}>
                Format JSON
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JsonFormatter;
