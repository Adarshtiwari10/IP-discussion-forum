import React from 'react';

function Reply({ reply }) {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '15px',
      marginBottom: '15px',
      borderRadius: '5px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#888', marginBottom: '8px' }}>
        <span>Reply by: {reply.author}</span>
        <span>{reply.date}</span>
      </div>
      <p style={{ whiteSpace: 'pre-wrap', margin: '0' }}>{reply.content}</p>
    </div>
  );
}

export default Reply;