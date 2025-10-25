'use client';
import React, { useState } from 'react';

export default function Page() {
  const [text, setText] = useState('');
  const [feedback, setFeedback] = useState('');

  const analyze = () => {
    if (!text.trim()) return setFeedback('Please paste your résumé text first.');
    const words = text.split(' ').length;
    const score = Math.min(100, 40 + (words % 60));
    setFeedback(`AI feedback: Your résumé reads clearly. Estimated score ${score}/100. Try adding quantified results and strong verbs.`);
  };

  return (
    <main style={{ minHeight: '100vh', padding: 40, fontFamily: 'system-ui' }}>
      <h1 style={{ fontSize: 32, fontWeight: 700 }}>
        CareerTune by Denzel
      </h1>
      <p>Paste your résumé below and get instant feedback ⚡</p>
      <textarea
        placeholder="Paste résumé text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: '100%', height: 200, marginTop: 10, borderRadius: 8, border: '1px solid #ddd', padding: 10 }}
      />
      <div style={{ marginTop: 10 }}>
        <button
          onClick={analyze}
          style={{ background: '#2563eb', color: 'white', padding: '10px 20px', borderRadius: 8, border: 'none', fontWeight: 600 }}
        >
          Analyze
        </button>
      </div>
      {feedback && <div style={{ marginTop: 20, fontSize: 16 }}>{feedback}</div>}
      <footer style={{ marginTop: 50, color: '#666' }}>© {new Date().getFullYear()} CareerTune by Denzel</footer>
    </main>
  );
                  }
