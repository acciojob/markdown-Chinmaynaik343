
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState("");
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setPreview(markdown);
    setLoading(false);
  }, [markdown]);

  return (
    <div className="editor-container">
      <div className="editor-section">
        <h2>Markdown Input</h2>

        <textarea
          className="textarea"
          value={markdown}
          onChange={(event) => setMarkdown(event.target.value)}
          placeholder="Write your Markdown here..."
        />
      </div>

      <div className="preview-section">
        <h2>Live Preview</h2>

        <div className="preview">
          {loading ? (
            <p className="loading">Loading...</p>
          ) : (
            <ReactMarkdown>{preview}</ReactMarkdown>
          )}
        </div>
      </div>
    </div>
  );
}

export default MarkdownEditor;
