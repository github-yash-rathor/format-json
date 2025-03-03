import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
            {/*<h5>Input JSON</h5>*/}
            <textarea
                className="json-textarea"
                onChange={handleInputChange}
                placeholder="Enter unformatted JSON here..."
                value={jsonInput}
            />
          </div>

          <div className="json-box">
            {/*<h5>Formatted JSON</h5>*/}
            <textarea
                className="json-textarea"
                value={jsonOutput}
                readOnly
                placeholder="Formatted JSON will appear here..."
            />
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
