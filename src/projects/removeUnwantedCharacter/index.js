import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Header from "../../components/Header";
import './styles.css';

const RemoveUnwantedCharacter = () => {
    const [jsonInput, setJsonInput] = useState('');
    const [jsonOutput, setJsonOutput] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const input = e.target.value;
        try {
            const formattedText = input
                .replace(/\\n/g, '\n')
                .replace(/\\t/g, '\t');
            setJsonInput(input);
            setJsonOutput(formattedText);
            setError('');
        } catch (e) {
            setError('Error processing the text: ' + e.message);
            setJsonOutput('');
        }
    };

    const handleClear = () => {
        setJsonInput('');
        setJsonOutput('');
        setError('');
    };

    return (
        <div className="page-container">
            <Header/>
            <main className="project-content">
                <h1>{'Remove unwanted Characters'}</h1>
                <div className="project-details">
                    <section className="project-section">
                        <div className="button-container">
                            <button onClick={handleClear} className="clear-button">
                                Clear
                            </button>
                        </div>

                        <div className="json-container">
                            <div className="json-box">
                                <textarea
                                    className="json-textarea scrollable"
                                    onChange={handleInputChange}
                                    placeholder="Enter text with \n for newlines and \t for tabs..."
                                    value={jsonInput}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        resize: 'none',
                                        overflowY: 'auto',
                                        overflowX: 'auto'
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
                                        padding: '1rem',
                                        borderRadius: '4px',
                                        height: '100%',
                                        overflow: 'auto',
                                        whiteSpace: 'pre',
                                        wordBreak: 'keep-all'
                                    }}
                                >
                                    {jsonOutput || '// Formatted text will appear here'}
                                </SyntaxHighlighter>
                            </div>
                        </div>

                        {error && <div className="error-message">{error}</div>}
                    </section>
                </div>
            </main>
        </div>
    );
};

export default RemoveUnwantedCharacter;
