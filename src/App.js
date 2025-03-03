import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./styles.css";

function App() {
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
      setJsonOutput(formattedJson);
      setError("");
    } catch (err) {
      setError("Invalid JSON format");
      setJsonOutput("");
    }
  };

  return (
    <div className="app-container">
      <Header />

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
            // wrapLongLines={true}
            customStyle={{
              margin: 0,
              padding: '1rem',
              borderRadius: '4px',
              height: '100%',
              overflow: 'auto'
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

      <Footer />
    </div>
  );
}

export default App;
